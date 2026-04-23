function somar(num1 , num2){
    return num1 + num2
}

function sub(num1,num2){
    return num1 - num2
}

function mult(num1,num2){
    return num1 * num2
}

function calcular(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calcular(10,2, sub))