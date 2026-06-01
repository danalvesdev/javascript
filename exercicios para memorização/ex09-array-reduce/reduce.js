const numeros = [10, 20, 30, 40]
let soma = numeros.reduce((acumulador,valor) => acumulador += valor,0);
console.log(soma)

const valores = [100, 200, 300];
let somaValores = valores.reduce((acumula,precos)=> acumula += precos,0)
console.log(somaValores)