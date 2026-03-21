function calcula(){
    var num1 = document.getElementById('num').value
    var res = document.getElementById('res')

    if(num1 == ""){
        alert('Digite um número!')
        return
    }
    for(var c = 1;c <= 10;c++){
        res.innerText += `${num1} X ${c} = ${num1 * c} \n`
    }
}