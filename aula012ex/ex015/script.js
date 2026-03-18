function verificar(){
    var AnoNasc = Number(document.getElementById('anonasc').value)
    var AnoAtual = new Date().getFullYear()
    var idade = AnoAtual - AnoNasc

    var masc = document.getElementById('masc')
    var femi = document.getElementById('femi')
    var frase = document.getElementById('resp')//parte do paragrafo
    var img = document.getElementById('imagem')//imagem
    var genero = ''
    if(masc.checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){
            img.setAttribute('src', 'imagens/menino-criança.jpg')
        }else if(idade < 21){
            img.setAttribute('src','imagens/menino-jovem.jpg')
        }else if(idade < 51){
            img.setAttribute('src', 'imagens/homem-adulto.jpg')
        }else{
            img.setAttribute('src', 'imagens/homem.idoso.jpg')
        }
    }else if(femi.checked){
        genero ='Mulher'
    }
    frase.style.textAlign = 'center';
    frase.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    frase.appendChild(img)
}