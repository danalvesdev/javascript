function calcula(){
    var num1 = document.getElementById('num')
    var res = document.getElementById('res')

    if(num1.value.length == 0){
        alert('Digite um número!')
    }else{
        var n = Number(num1.value)
        res.innerHTML = ''
    for(var c = 1;c <= 10;c++){
        res.innerText += `${n}   x   ${c} = ${n*c} \n`
        }
    }
}