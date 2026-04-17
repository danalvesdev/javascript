// Arguments que sustenta todos os argumentos enviados

function somar(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total);
}
somar(2, 3, 110)

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50)