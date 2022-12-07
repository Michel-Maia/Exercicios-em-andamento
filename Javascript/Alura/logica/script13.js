

    function pulaLinha() {

        document.write("<br>");
        document.write("<br>");
}

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

while(tentativas <= 3) {

    var chute = parseInt(prompt("Digite seu chute!"));

    if(chute == numeroPensado) {

        mostra("Você ACERTOU, o número pensado era " + numeroPensado);
        break;

    } else {

        mostra("Você ERROU!");
    }

    tentativas++;
}

mostra("FIM");


// número inteiro var numero = parseInt("12.13");
// número decimal var numero = parseFloat("12.13");


