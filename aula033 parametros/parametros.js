// Arguments que sustenta todos os argumentos enviados

function somar(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento
    }

    console.log(total);
}

somar(2, 3, 110)