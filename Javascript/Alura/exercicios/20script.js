
function buscaElemento(seletor) {
    return document.querySelector(seletor);
}

var botao = buscaElemento('.botao');
var numero = buscaElemento('.numero');
var tabuada = buscaElemento('.tabuada');
var resultado = buscaElemento('.resultado');

botao.addEventListener('click', function() {

    resultado.textContent = numero.value * tabuada.value;

});

