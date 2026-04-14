const adicionar = document.getElementById('adicionar')
const botao = document.getElementById('botao')
let mostrar = document.getElementById('folha')

botao.addEventListener('click', function(){
    if(adicionar.value.length == 0){
        alert('Adicione algo na sua lista!')
        return
    }

    mostrar.innerHTML += `<ul><li>${adicionar.value} <button onclick="apagar(this)">apagar</button></li></ul>` 
    localStorage.setItem('tarefas', mostrar.innerHTML)
    adicionar.value = ''
    adicionar.focus()
});

window.onload = function(){
    mostrar.innerHTML = localStorage.getItem('tarefas')    
}

function apagar(botao){
    botao.parentElement.remove()
    localStorage.setItem('tarefas', mostrar.innerHTML)
}