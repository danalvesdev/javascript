// Retorne os números maiores que 10
const numeros = [8,10,22,1,5,12,34,3,9,15,12];
const numeromaior = numeros.filter((valor)=>{
    return valor >= 10;
})
console.log(numeromaior)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos 
// Retorne as pessoas cujo o nome termina em a
const pessoas = [
    {nome: 'Dan',idade: 17},
    {nome: 'Gerusa', idade: 39},
    {nome: 'Bella', idade: 12},
    {nome: 'Reginaldo', idade: 41},
    {nome: 'Renata', idade: 18},
    {nome: 'Daniel', idade: 58},
    {nome: 'Eliana', idade: 62}
];

const pessoasNomeMaior = pessoas.filter(valor => valor.nome.length > 5)
console.log(pessoasNomeMaior)

const pessoasVelhas = pessoas.filter(ano => ano.idade > 50)
console.log(pessoasVelhas)

const nomeTerminaComA = pessoas.filter(letraA => letraA.nome.endsWith('a'))
console.log(nomeTerminaComA)