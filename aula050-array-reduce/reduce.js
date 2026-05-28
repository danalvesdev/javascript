// Soma todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [8,10,22,1,5,12,34,3,9,15,12,4];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
},0);  
console.log(`O total do array é : ${total}`)

// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

// Retorne a pessoa mais velha 
const pessoas = [
    {nome: 'Dan',idade: 17},
    {nome: 'Gerusa', idade: 39},
    {nome: 'Bella', idade: 12},
    {nome: 'Reginaldo', idade: 41},
    {nome: 'Renata', idade: 18},
    {nome: 'Daniel', idade: 58},
    {nome: 'Eliana', idade: 62}
]; 

const PessoaVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
})
console.log(PessoaVelha)