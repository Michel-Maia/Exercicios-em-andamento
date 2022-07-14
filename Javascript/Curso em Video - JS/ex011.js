
function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel} Km/h` 
    if (vel > 60) {
        res.innerHTML += `Você foi MULTADO` 
    
    } else {
        res.innerHTML += `Dirija sempre com cinto de segurança!` 
    }

}
