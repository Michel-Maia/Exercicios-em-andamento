function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 22
    //var hora = 8
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // bom dia 
        img.src = "https://images.pexels.com/photos/3030459/pexels-photo-3030459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        document.body.style.background = '#e2cd97'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = "https://images.pexels.com/photos/977736/pexels-photo-977736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        document.body.style.background = '#515154'
    }
}