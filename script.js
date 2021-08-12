function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `

        if (hora >= 0 && hora < 12) { 
            img.src = '/Exercicios IF/imagens/manha.png'
            document.body.style.background = rgb(20,20,20)
        } else if (hora >= 12 && hora <= 18) {
            img.src = '/Exercicios IF/imagens/tarde.png'
        } else {
            img.src = '/Exercicios IF/imagens/noite.png'
            document.body.style.background = rgb(0,20,20)
        }
}
