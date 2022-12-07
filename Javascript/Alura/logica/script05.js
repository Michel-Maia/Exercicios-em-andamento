// melhorando o código IMC

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
    return peso / (altura * altura); 
}

var nome = prompt("Informe o seu nome");
var alturaInformada = prompt(nome + ", informe sua altura");
var pesoInformado = prompt(nome + ", informe seu peso");

var imc = calculaImc(pesoInformado, alturaInformada);

mostra(nome + ", o seu IMC calculado é " + imc);

if (imc >= 18.5 && imc <= 24.99) {
    mostra("Você está com o peso adequado");
    
} else if (imc >=25){
    mostra("Você está precisando malhar");
} 



