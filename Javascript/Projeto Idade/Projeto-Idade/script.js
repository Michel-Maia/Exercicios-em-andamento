function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.src ="https://images.pexels.com/photos/3661356/pexels-photo-3661356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


            } else if (idade < 21) {
                //img.setAttribute('src', 'foto-jovem-m.jpg')
                img.src = "https://images.pexels.com/photos/6785039/pexels-photo-6785039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            } else if (idade < 50) {
                // adulto
                img.src ="https://images.pexels.com/photos/7128670/pexels-photo-7128670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            } else {
                // idoso 
                img.src ="https://images.pexels.com/photos/2050999/pexels-photo-2050999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            


        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.src = "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            
                
            } else if (idade < 21) {
                // jovem
                img.src ="https://images.pexels.com/photos/6214873/pexels-photo-6214873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            } else if (idade < 50) {
                // adulto
                img.src = "https://images.pexels.com/photos/2557735/pexels-photo-2557735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            } else {
                // idoso 
                img.src = "https://images.pexels.com/photos/8126184/pexels-photo-8126184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            
        }


    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }

    
}
