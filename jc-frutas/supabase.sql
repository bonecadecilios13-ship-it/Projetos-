-- =====================================================================
-- JC Frutas: banco de dados (cole tudo no Supabase > SQL Editor > Run)
-- E-mail liberado para o painel: bonecadecilios13@gmail.com
-- (é com ele que o Júlio vai entrar no painel admin.html).
-- =====================================================================

-- Clientes (um perfil para cada conta criada no site)
create table if not exists public.perfis (
  id uuid primary key references auth.users on delete cascade,
  nome text,
  fone text,
  email text,
  condominio text,
  apartamento text,
  criado_em timestamptz not null default now()
);

-- Quem pode abrir o painel
create table if not exists public.admins (
  email text primary key
);

-- Pedidos
create table if not exists public.pedidos (
  id bigint generated always as identity primary key,
  codigo text unique not null,
  user_id uuid not null default auth.uid() references public.perfis(id) on delete cascade,
  itens jsonb not null,               -- { "id_do_produto": quantidade_de_lotes }
  linhas text[],                      -- texto do pedido, como aparece no WhatsApp
  subtotal numeric(10,2) not null,
  desconto numeric(10,2) not null default 0,
  total numeric(10,2) not null,
  entrega boolean not null default true,
  condominio text,
  apartamento text,
  dia date,
  frequencia text,
  obs text,
  pagamento text not null default 'pix' check (pagamento in ('pix','cartao')),
  status text not null default 'aguardando'
    check (status in ('aguardando','pago','entregue','cancelado')),
  criado_em timestamptz not null default now()
);
create index if not exists pedidos_user_idx on public.pedidos(user_id);
create index if not exists pedidos_dia_idx on public.pedidos(dia);

-- É admin?
create or replace function public.sou_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from admins where lower(email) = lower(auth.jwt() ->> 'email'));
$$;

-- Segurança: cada cliente só vê o que é dele; o admin vê tudo
alter table public.perfis  enable row level security;
alter table public.pedidos enable row level security;
alter table public.admins  enable row level security;

drop policy if exists perfis_ver on public.perfis;
create policy perfis_ver on public.perfis for select to authenticated
  using (id = auth.uid() or public.sou_admin());
drop policy if exists perfis_criar on public.perfis;
create policy perfis_criar on public.perfis for insert to authenticated
  with check (id = auth.uid());
drop policy if exists perfis_editar on public.perfis;
create policy perfis_editar on public.perfis for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists pedidos_ver on public.pedidos;
create policy pedidos_ver on public.pedidos for select to authenticated
  using (user_id = auth.uid() or public.sou_admin());
drop policy if exists pedidos_criar on public.pedidos;
create policy pedidos_criar on public.pedidos for insert to authenticated
  with check (user_id = auth.uid() and status = 'aguardando');
-- Ninguém altera pedidos direto: só pelas funções abaixo
revoke update, delete on public.pedidos from anon, authenticated;

-- Admin muda o status (pago, entregue, cancelado)
create or replace function public.mudar_status(p_codigo text, p_status text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.sou_admin() then raise exception 'Apenas o admin'; end if;
  if p_status not in ('aguardando','pago','entregue','cancelado') then raise exception 'Status inválido'; end if;
  update pedidos set status = p_status where codigo = p_codigo;
end $$;

-- Cliente escolhe Pix ou cartão enquanto o pedido aguarda pagamento
create or replace function public.escolher_pagamento(p_codigo text, p_metodo text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if p_metodo not in ('pix','cartao') then raise exception 'Método inválido'; end if;
  update pedidos set pagamento = p_metodo
   where codigo = p_codigo and user_id = auth.uid() and status = 'aguardando';
end $$;

revoke execute on function public.mudar_status(text,text) from anon, public;
revoke execute on function public.escolher_pagamento(text,text) from anon, public;
grant execute on function public.sou_admin() to authenticated;
grant execute on function public.mudar_status(text,text) to authenticated;
grant execute on function public.escolher_pagamento(text,text) to authenticated;

-- E-mail que entra no painel admin.html
insert into public.admins (email) values ('bonecadecilios13@gmail.com')
  on conflict do nothing;
