const mostrar = document.getElementById('tarefa') // onde digita
console.log(mostrar)
const adicionar = document.getElementById('MostrarTxt') // Botão de adicionar
const CriarLista = document.querySelector('.li')// onde vai mostrar oq eu adicionei
adicionar.addEventListener('click', () => {
    CriarLista.innerHTML += mostrar.value
})