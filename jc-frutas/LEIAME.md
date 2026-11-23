# JC Frutas: como colocar o site no ar

O site tem duas páginas:
- **index.html**: a loja. O cliente cria conta com e-mail e senha, monta o pedido, paga no Pix ou pede o link do cartão. Cada pedido fica salvo.
- **admin.html**: o painel do Júlio. Mostra os pedidos do dia, confirma pagamentos, monta a lista do que comprar e lista os clientes com tudo o que já compraram.

O banco de dados e o login ficam no **Supabase** (grátis). O site fica na **Vercel** (grátis).

## 1. Banco de dados (Supabase)
1. Crie uma conta em supabase.com e um projeto novo, chamado `jc-frutas`, na região **South America (São Paulo)**. Anote a senha do banco.
2. Abra o **SQL Editor**, cole todo o conteúdo do arquivo `supabase.sql`, e toque em **Run** (o e-mail bonecadecilios13@gmail.com já está liberado para o painel).
3. Vá em **Project Settings → API** e copie a **Project URL** e a chave **anon public**.
4. Cole as duas no arquivo `config.js`.
5. Em **Authentication → URL Configuration**, coloque em *Site URL* o endereço do site na Vercel (passo 2), por exemplo `https://jc-frutas.vercel.app`.
6. (Opcional) Em **Authentication → Providers → Email**, desligue *Confirm email* se não quiser que o cliente precise confirmar o e-mail antes de comprar.

## 2. Site (Vercel)
1. O código fica num repositório do GitHub.
2. Em vercel.com, entre com o GitHub, toque em **Add New → Project**, escolha o repositório e toque em **Deploy**. Não precisa mudar nenhuma configuração.
3. Pronto: a loja abre em `https://SEU-PROJETO.vercel.app` e o painel em `https://SEU-PROJETO.vercel.app/admin.html`.

## 3. Primeiro acesso do Júlio
1. Na loja, toque em **Entrar → Criar conta** com o e-mail bonecadecilios13@gmail.com.
2. Depois abra `/admin.html` e entre com esse e-mail e senha.

## Mudar preços, produtos e combos
Tudo fica no arquivo `produtos.js`. Para cada produto: `lote` é quantas unidades vêm pelo `preco` (exemplo: `lote:4, preco:10` = 4 por R$ 10). `preco:null` mostra "preço em breve". O link do cartão da InfinitePay vai em `linkCartao`.

## Dia a dia do Júlio no painel
- **Pedidos**: escolha o dia da feira. Quando o Pix cair, toque em **Pagamento confirmado**. Na entrega, toque em **Marcar entregue**.
- **Comprar**: soma tudo o que foi **pago** para aquele dia, para comprar na quantidade certa.
- **Clientes**: quem compra, quanto já gastou, o último pedido e quem tem pedido fixo.

Importante: o site não confirma o Pix sozinho. O Júlio confere no app do banco se o valor do pedido caiu e só então confirma no painel.
