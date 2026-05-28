// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar tudo)
const numeros = [8,10,22,1,5,12,34,3,9,15,12,4];
let pares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2) 
    .reduce((acumulador,valor) => acumulador + valor)
//[8, 10, 22, 12,34, 12,  4] Números pares
//[16, 20, 44, 24,68, 24, 8] Dobro de numeros pares
console.log(pares)