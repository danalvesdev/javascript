//Escreva uma função que recebe um número e 
//retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número
//Use a função com números de 0 a 100

function numero(n){
    if(typeof n !== 'number') return n;
    if(n % 3 == 0 && n % 5 === 0) return 'FizzBuzz';
    if(n % 3 == 0) return 'Fizz';
    if(n % 5 == 0) return 'Buzz';
    return n;
}
    console.log('a', numero())
    for (let c = 0; c <= 100;c++){
        console.log(c, numero(c))
    }