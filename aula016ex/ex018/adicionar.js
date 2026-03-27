var numeros = []
var campo = document.getElementById('num')
var res = document.getElementById('resul')
function clicar(){
    var num = Number(campo.value)
    if(campo.value.length == 0){
        alert("Digite algo.")
        return
    
    }if(numeros.indexOf(num) != -1){
        alert("Digite um número que não está na lista!")
        return
    }
    else{
        if(num > 100  || num < 1){
            alert('Número inválido!')
            return
        }
    }
    var item = document.createElement('option')
    numeros.push(num)
    item.value = num
    item.innerHTML = `Valor ${num} adicionado`
    res.appendChild(item)
    resultado.innerHTML = ''  
    campo.value = ''  
    campo.focus()
}

var resultado = document.getElementById('calculos')
function calcular(){
    if(numeros.length == 0){
        alert("Adicione valores!")
        }else{
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
        if(numeros.length > 1){
            resultado.innerHTML += `Ao todo temos ${numeros.length} números. <br>`
        }else{
            resultado.innerHTML += `Ao todo temos ${numeros.length} número. <br>`
        }
        res.innerHTML = ''
        resultado.innerHTML += `Número maior foi : ${maior} <br>`
        resultado.innerHTML += `Número menor foi : ${menor} <br>`
        resultado.innerHTML += `A soma dos números é : ${soma} <br>`
        resultado.innerHTML += `A média dos valores é : ${media} <br>`
    }
}