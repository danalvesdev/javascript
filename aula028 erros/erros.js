try{
    console.log(numeros)
}catch(erro){
    console.log('numeros nao existe')
}

function soma(x, y){
    if(typeof x != 'number' || typeof y != 'number'){
        throw('X ou Y precisam ser numeros');
    }
    return x + y
}
try{
console.log(soma(bella, dan))
} catch(error){
    console.log("Alguma coisa mas amigavel pro usuario")
}