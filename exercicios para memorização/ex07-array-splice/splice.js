const mostrar = document.getElementById('tarefa') // onde digita
const adicionar = document.getElementById('MostrarTxt') // Botão de adicionar
const ulDaLista = document.getElementById('ul') // onde vai mostrar oq eu adicionei
adicionar.addEventListener('click', () => {
    if(mostrar.value.length === 0){
        alert('Digite algo!')
        return
    }
    const CriarLista = document.createElement('li')
    CriarLista.innerHTML = mostrar.value
    ulDaLista.appendChild(CriarLista)
    mostrar.value = ''
    mostrar.focus()
});