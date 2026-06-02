// Ex01
const numeros = [10, 20, 30, 40]
console.log("Exercício 01: ")
numeros.forEach(n => console.log(n))

//Ex02
const multiplicar = [1, 2 , 3, 4,]
console.log("\n Exercício 02:" )
multiplicar.forEach(mul => {
    console.log('\n', mul * 3);
})

// Ex03
const nomes = ['Daniel', 'Ana', 'Carlos']
console.log('\n Exercício 03')
nomes.forEach(mostra => console.log('Olá', mostra));

// Ex04
const produtos = [
    {item: 'Mouse', preco: 50},
    {item: 'Teclado', preco: 200},
    {item: 'Monitor', preco: 900}
]
// Ex05
console.log('\n Exercício 05:')
produtos.forEach(mostra => {
    console.log(mostra.item, '-', mostra.preco)
})

// Ex06
console.log('\n Exercício 06:')
const somaNumeros = [10, 20, 30, 40];
let total = 0
somaNumeros.forEach(tot => {
    total += tot
})
console.log(total)