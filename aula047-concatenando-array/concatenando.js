let a1 = [1,2,3]
let a2 = [4,5,6]
//const unidos = a1.concat(a2, [7,8]) //PODEMOS TBM ADICIONAR UM ARRAY DENTRO.
//console.log(unidos)

//FORMA ERRADA
let b1 = [1,2]
let b2 = [3,4]
const uni = b1 + b2
console.log(`Modo errado ${uni}`) 

// fORMA MELHOR DE USAR, COM O REST (...),FAZ A MESMA COISA DO CONCAT.

const unidos = [...a1,'Dan',...a2]
console.log(unidos)