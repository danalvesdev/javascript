const produtos = [
    {itens: 'Mouse', preco: 50},
    {itens: 'Teclado', preco: 200},
    {itens: 'Monitor', preco: 900}
];

const Vistoria = produtos
.filter(valores => valores.preco > 100)
.map(valores => valores.preco - (valores.preco * 0.10))
.reduce((Soma,valores) => Soma + valores,0);

console.log(Vistoria)