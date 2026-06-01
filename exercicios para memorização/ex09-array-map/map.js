const numeros = [1, 2, 3, 4, 5];
const Mul = numeros.map(valor => valor * 2)
console.log(Mul)

const pessoas = [
    {nome: 'Daniel', idade: 17},
    {nome: 'Ana', idade: 22},
    {nome: 'Renata', idade: 18}
];

const nomes = pessoas.map(ApenasNome => ApenasNome.nome)
console.log(nomes)