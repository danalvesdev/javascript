let pessoas = []
function clicar(){
    let nome = document.getElementById('nome1').value
    let sobrenome = document.getElementById('sobrenome1').value
    let peso = document.getElementById('peso1').value
    let altura = document.getElementById('altura1').value

    let pessoa = {
        nome, 
        sobrenome,
        peso,
        altura
    };
    pessoas.push(pessoa)
    let res = document.getElementById('resultado')
    res.innerHTML += `Meu nome é ${pessoa.nome} ${pessoa.sobrenome}, peso ${pessoa.peso} kg e tenho ${pessoa.altura} m de altura. <br>`
    console.log(pessoas)
};