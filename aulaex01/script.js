function clicar(){
    let nome = document.getElementById('nome1').value
    let sobrenome = document.getElementById('sobrenome1').value
    let peso = document.getElementById('peso1').value
    let altura = document.getElementById('altura1').value
    let res = document.getElementById('res')

    let acumulador = [{
        nome: nome, 
        sobrenome: sobrenome,
        peso: peso, 
        altura: altura
    }];
    for(let i = 0; i < acumulador.length; i++){
        console.log(acumulador[i])
    }
    console.log(acumulador)
};