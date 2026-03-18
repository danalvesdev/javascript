function carregar(){
    var msg = document.getElementById('mensagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    var img = document.getElementById('imagem')
    
    if(hora >= 0 && hora < 12){
        img.src = 'img/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/fototarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'img/fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}