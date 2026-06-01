const produtos = [
    {itens: 'Mouse', preco: 50},
    {itens: 'Teclado', preco: 200},
    {itens: 'Monitor', preco: 900}
];

const Procurar = produtos.filter(valor => valor.preco > 100).map(valor => valor.itens)
console.log(Procurar)