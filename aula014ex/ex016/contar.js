function conta(){
    var ini = document.getElementById('comeco')
    var fim = document.getElementById('final')
    var incre = document.getElementById('incremento')
    var resp = document.getElementById('res')
     if(ini.value.length == 0 || fim.value.length == 0 || incre.value.length == 0){
           alert("preencha os campos!")
        }else{
            resp.innerHTML = 'Contando :'
        } 
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(incre.value)
    if(p <= 0){
        alert("Passo inválido! Considerando passo 1")
        p = 1
    }
    if(i < f ){
    for(var c = i; c <= f; c += p){
        resp.innerText += `${c} 🫱🏻`
        }
    }else{
        for(var c = i; c >= f;c -= p){
            resp.innerText += `${c} 🫱🏻`
        }
    }
    resp.innerText += "🏁"
}