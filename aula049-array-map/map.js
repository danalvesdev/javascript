//  Dobre os numeros
const numeros = [8,10,22,1,5,12,34,3,9,15,12];
let dobra = numeros.map((valor) =>{
    return valor * 2  
})
//console.log(dobra)

// para cada elemento :
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Dan',idade: 17},
    {nome: 'Gerusa', idade: 39},
    {nome: 'Bella', idade: 12},
    {nome: 'Reginaldo', idade: 41},
    {nome: 'Renata', idade: 18},
    {nome: 'Daniel', idade: 58},
    {nome: 'Eliana', idade: 62}
]; 

const nomes = pessoas.map(valor => valor.nome)
//console.log(nomes)

//const removerNome = pessoas.map(function(obj){
  //  delete obj.nome;
  //  return obj;
//})
//console.log(removerNome)

const ComIds = pessoas.map(function(nomes, indice){
    nomes.id = indice + 1;
    return nomes;
})
console.log(ComIds)