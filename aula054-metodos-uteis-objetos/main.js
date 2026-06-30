//Spread
let original = {nome: 'Daniel', idade: 17}
let copia = {...original}
copia.nome = 'Bella'
copia.idade = 18

console.log(original)
console.log(copia)

//Objeto.values
console.log(Object.values(original))