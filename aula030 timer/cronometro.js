document.getElementById('relogio')
let segundos = 0
let minutos = 0
let horas = 0 
let timer
function inicia(){
    parar()
    timer = setInterval(function (){
    segundos++
        if(segundos == 60){
            segundos = 0
            minutos++
        }
            if(minutos == 60){
                minutos = 0 
                horas++
            };
            relogio.innerHTML = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2 , "0")}:${String(segundos).padStart(2, "0")}`
    }, 1000);
}

function parar(){
    clearInterval(timer);
}

function limpar(){
    segundos = 0
    minutos = 0
    horas = 0
    relogio.innerHTML = '00:00:00'
}