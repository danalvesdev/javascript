const mostrar = document.getElementById('res')
let frutas = ["maçã", "banana", "uva", "melão", "morango"]
for(let i = 0;i < frutas.length;i++){
    mostrar.innerHTML += `${frutas[i]} <br>`
}