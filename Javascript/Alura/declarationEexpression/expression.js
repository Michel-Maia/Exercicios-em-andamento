// function expression
// não aceita o hoisting


const essaPalavraEUmPalindromo = function () {
    var palavra = "laptop"; 
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
        if (palavra == palavraInvertida) {
            console.log("A palavra " + palavra + " é um palíndromo");
        } else {
            console.log("A palavra " + palavra + " não é um palíndromo")
        }
   
}

essaPalavraEUmPalindromo ();




