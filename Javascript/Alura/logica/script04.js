function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}


var vitorias = parseInt( prompt("Digite o número de vitórias do seu time"));
var empates = parseInt (prompt("Digite o número de empates do seu time"));

var pontos = vitorias * 3 + empates;

mostra("Os pontos do seu time é " + pontos);

if (pontos > 28) {
    mostra("Seu time está melhor do que o ano passado");
} if (pontos < 28) {
    mostra("Seu time está pior do que o ano passado");
} else if  (pontos == 28){
    mostra("Seu time está igual ao ano passado");
}






