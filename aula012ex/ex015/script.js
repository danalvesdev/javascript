function verificar(){
    var AnoNasc = Number(document.getElementById('anonasc').value)
    var AnoAtual = new Date().getFullYear()
    var idade = AnoAtual - AnoNasc
    if(AnoNasc.valueOf.length == 0 || AnoNasc > AnoAtual){
        alert('Digite um ano válido!')
        img.style.display = 'none'
    }

    var masc = document.getElementById('masc')
    var femi = document.getElementById('femi')
    var frase = document.getElementById('res')//parte do paragrafo
    var img = document.getElementById('imagem')//imagem
    var genero = ''
    if(masc.checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){
           img.src = 'imagens/menino-criança.jpg'
        }else if(idade < 21){
            img.src = 'imagens/menino-jovem.jpg'
        }else if(idade < 51){
            img.src = 'imagens/homem-adulto.jpg'
        }else{
           img.src = 'imagens/homem-idoso.jpg'
        }
    }else if(femi.checked){
        genero ='Mulher'
        if(idade >= 0 && idade <= 10){
            img.src = 'imagens/menina-criança.jpg'
        }else if(idade < 21){
            img.src = 'imagens/menina-jovem.jpg'
        }else if(idade < 51){
            img.src = 'imagens/mulher-adulta.jpg'
        }else{
            img.src = 'imagens/mulher-idosa.jpg'
        }
    }
    //fim
    res.style.textAlign = 'center'//para o texto ficar no meio
    frase.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    img.style.display = 'block' //para não dar buga e aparecer so quando digitarmos
    frase.appendChild(img)
}