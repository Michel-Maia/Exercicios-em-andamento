function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function a(texto) {
    return "(" + texto + ")";
}

function b(texto) {
    return "@" + texto + "@";
}

function c(nome, sobrenome) {
    return b(nome + " " + a(sobrenome));
}

var resultado = c("Fulano", "Silva");

mostra(resultado);
