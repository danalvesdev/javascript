var numeros = []
var campo = document.getElementById('num')
var res = document.getElementById('resul')
function clicar(){
    var num = Number(campo.value)
    if(campo.value.length == 0 || numeros.indexOf(num) != -1){
        alert("Digite algo ou número diferente")
        return
    }else{
        if(num > 100  || num < 1){
            alert('Número inválido!')
            return
        }
    }
    var item = document.createElement('option')
    numeros.push(num)
    item.value = num
    item.innerHTML = `Você adicionou ${num}`
    res.appendChild(item)    
}

var resultado = document.getElementById('calculos')
function calcular(){
    var maior = numeros[0]
    var menor = numeros[0]
    var soma = 0
    var media = 0
    for(let c = 0;c < numeros.length;c++){
        let num = Number(numeros[c])
        if(num > maior){
            maior = num
        }if(num < menor){
            menor = num
        }
        soma = soma + num
        media = soma / numeros.length
    }
    resultado.innerHTML += `<h2>Ao todo temos ${numeros.length} números <br>`
    resultado.innerHTML += `<h2>Número maior foi : ${maior} <br>`
    resultado.innerHTML += `<h2>Número menor foi : ${menor} <br>`
    resultado.innerHTML += `<h2>A soma dos números é : ${soma} <br>`
    resultado.innerHTML += `<h2>A média dos valores é : ${media} <br>`

    numeros = []
    res.innerHTML = ''
    resultado.innerHTML = ''
}