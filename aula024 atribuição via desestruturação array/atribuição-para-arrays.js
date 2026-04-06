const numeros = [10, 20, 30, 90, 100, 203  ]
const [a, b , c , ...resto] = numeros
console.log(a, b, c)
console.log('operador para pegar o resto do array é : ...var')
console.log(resto)

console.log('Pular numeros é com duas virgulas')
const numeros02 = [100, 200, 300, 400, 500]
const [um , , tres , quatro] = numeros02
console.log(um, tres, quatro)

console.log('Array com outro array dentro :')

//                    0          1         2
//                  0  1  2    0   1  2   0  1  2
const numeros03 = [[1 ,2 ,3], [4, 5, 6], [7, 8, 9]];
console.log(numeros03[1][1])