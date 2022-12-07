

    function pulaLinha() {

        document.write("<br>");
        document.write("<br>");
}

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
}


function sorteia(n) {
    return Math.round(Math.random() * n);
}

//var numeroPensado = 5;

//var numeroPensado = Math.round(Math.random() * 10);

var numeroPensado = sorteia(10);
var chute = parseInt(prompt("digite seu chute!"));

if(chute == numeroPensado) {
    mostra("Você acertou!");
} else {
    mostra("Você errou, o número pensado foi " + numeroPensado);
}


/*
 if(chute !=  numeroPensado) {
    mostra("Você errou, o número pensado foi " + numeroPensado);
}
*/



// math.round arredonda os números
// math.random números randomicos
// Math.round(Math.random() * 10);



/*
Math.round(Math.random() * 10);
1
Math.round(Math.random() * 10);
6
Math.round(Math.random() * 10);
7
Math.round(Math.random() * 10);
10
*/


