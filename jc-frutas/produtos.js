/* JC Frutas: produtos, combos, preços e dados de pagamento. Edite aqui. */
const CONFIG = {
  pixChave: "26553166811", // chave Pix do Júlio (CPF)
  pixNome: "JULIO CESAR",  // nome do recebedor (até 25 letras, sem acento)
  pixCidade: "SAO PAULO",  // cidade (até 15 letras)
  whatsapp: "5511959904249", // WhatsApp do Júlio
  taxaEntrega: 0,          // taxa para entregar no apê (0 = grátis)
  prazo: "Pedidos até as 20h do dia anterior à feira. Entrega grátis dentro do condomínio.",
  // Produtos: "lote" unidades por "preco" (ex.: 4 por R$ 10). cor = selo até chegar a foto
  descontoMin: 200,        // compras a partir deste valor ganham desconto
  descontoPct: 10,         // % de desconto
  linkCartao: "",          // link de pagamento no cartão (deixe vazio para esconder)
  combos: [
    {id:"cpequeno", nome:"Combo Pequeno", preco:80, pessoas:"Até 3 pessoas (casal e uma criança)", foto:"img/cpequeno.jpg",
     itens:["6 bananas","6 laranjas","7 maçãs Gala","1 abacaxi","1 mamão formosa","2 mangas","1 caixa de uva sem semente"]},
    {id:"cmedio", nome:"Combo Médio", preco:120, pessoas:"Família de 4 a 5 pessoas", foto:"img/cmedio.jpg",
     itens:["12 bananas","12 laranjas","6 tangerinas","7 maçãs Gala","4 peras","4 goiabas","1 abacaxi","1 mamão formosa","2 mangas","1 caixa de uva sem semente"]},
    {id:"cgrande", nome:"Combo Grande", preco:200, pessoas:"Família com mais de 5 pessoas", foto:"img/cgrande.jpg",
     itens:["24 bananas","24 laranjas","12 tangerinas","14 maçãs Gala","4 peras","2 abacaxis","1 mamão formosa","3 mamões papaya","4 mangas","1 caixa de uva sem semente"]}
  ],
  produtos: [
    {id:"fuji", nome:"Maçã Fuji", lote:4, preco:10, foto:"img/fuji.jpg", cor:"#888"},
    {id:"gala", nome:"Maçã Gala", lote:7, preco:10, foto:"img/gala.jpg", cor:"#888"},
    {id:"argentina", nome:"Maçã Argentina", lote:4, preco:10, foto:"img/argentina.jpg", cor:"#888"},
    {id:"verde", nome:"Maçã verde", lote:4, preco:10, foto:"img/verde.jpg", cor:"#888"},
    {id:"pera", nome:"Pera", lote:4, preco:10, foto:"img/pera.jpg", cor:"#888"},
    {id:"goiaba", nome:"Goiaba", lote:4, preco:10, foto:"img/goiaba.jpg", cor:"#888"},
    {id:"papaya", nome:"Mamão papaya", lote:3, preco:20, foto:"img/papaya.jpg", cor:"#888"},
    {id:"formosa", nome:"Mamão formosa", lote:1, preco:15, foto:"img/formosa.jpg", cor:"#888"},
    {id:"banana", nome:"Banana (dúzia)", lote:12, preco:15, foto:"img/banana.jpg", cor:"#888"},
    {id:"laranja", nome:"Laranja (dúzia)", lote:12, preco:15, foto:"img/laranja.jpg", cor:"#888"},
    {id:"tangerina", nome:"Tangerina (dúzia)", lote:12, preco:15, foto:"img/tangerina.jpg", cor:"#888"},
    {id:"limao", nome:"Limão (dúzia)", lote:12, preco:10, foto:"img/limao.jpg", cor:"#888"},
    {id:"manga", nome:"Manga", lote:2, preco:10, foto:"img/manga.jpg", cor:"#888"},
    {id:"abacate", nome:"Abacate", lote:2, preco:10, foto:"img/abacate.jpg", cor:"#888"},
    {id:"abacaxi", nome:"Abacaxi", lote:1, preco:15, foto:"img/abacaxi.jpg", cor:"#888"},
    {id:"melaorei", nome:"Melão Rei (grandão)", lote:1, preco:30, foto:"img/melaorei.jpg", cor:"#888"},
    {id:"melao", nome:"Melão", lote:1, preco:20, foto:"img/melao.jpg", cor:"#888"},
    {id:"pitaya", nome:"Pitaya", lote:3, preco:20, foto:"img/pitaya.jpg", cor:"#d6246e"},
    {id:"uva", nome:"Uva sem semente (caixa)", lote:1, preco:15, un:"cx", foto:"img/uva.jpg", cor:"#888"},
    {id:"kiwi", nome:"Kiwi verde (caixinha)", lote:1, preco:15, un:"cx", foto:"img/kiwi.jpg", cor:"#888"},
    {id:"kiwibanana", nome:"Kiwi gold (caixinha)", lote:1, preco:35, un:"cx", foto:"img/kiwibanana.jpg", cor:"#8a9a2a"},
    {id:"cereja", nome:"Cereja", lote:1, preco:60, un:"kg", foto:"img/cereja.jpg", cor:"#888"},
    {id:"ameixa", nome:"Ameixa", lote:1, preco:20, un:"kg", foto:"img/ameixa.jpg", cor:"#888"},
    {id:"pessego", nome:"Pêssego", lote:1, preco:20, un:"kg", foto:"img/pessego.jpg", cor:"#888"},
    {id:"pinha", nome:"Pinha (fruta-do-conde)", lote:1, preco:5, foto:"img/pinha.jpg", cor:"#888"},
    {id:"atemoia", nome:"Atemoia", lote:1, preco:5, cor:"#8fb04a"},
    {id:"melancia", nome:"Melancia em pedaço", lote:1, preco:15, foto:"img/melancia.jpg", cor:"#888"},
    {id:"bdabacaxi", nome:"Abacaxi em rodelas (bandeja)", lote:1, preco:15, foto:"img/bdabacaxi.jpg", cor:"#888"},
    {id:"bdmamao", nome:"Mamão em fatias (bandeja)", lote:1, preco:15, foto:"img/bdmamao.jpg", cor:"#888"},
    {id:"bdmelao", nome:"Melão em fatias (bandeja)", lote:1, preco:15, foto:"img/bdmelao.jpg", cor:"#888"},
    {id:"morango", nome:"Morango", lote:1, preco:15, un:"cx", foto:"img/morango.jpg", cor:"#888"}
  ]
};

