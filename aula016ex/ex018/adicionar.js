var numeros = []
function clicar(){
    var campo = document.getElementById('num')
    var res = document.getElementById('resul')
    var item = document.createElement('option')
    var num = campo.value
    if(campo.value.length == 0 || numeros.indexOf(num) != -1){
        alert("Digite algo ou número diferente")
        return
    }else{
        if(num > 100  || num < 1){
            alert('Número inválido!')
            return
        }
    }
    numeros.push(num)
    item.value = num
    item.innerHTML = `Você adicionou ${num}`
    res.appendChild(item)

    function calcular(){
        console.log(numeros)
    }
}
