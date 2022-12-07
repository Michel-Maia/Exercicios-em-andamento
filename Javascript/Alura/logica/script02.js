
function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}


function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var pesoPessoa1 = 90;
var alturaPessoa1 = 1.65;

var imcPessoa1 = pesoPessoa1 / (alturaPessoa1 * alturaPessoa1);

mostra("O imc da Pessoa1 é " + imcPessoa1);

var pesoAmigo = 80;
var alturaAmigo = 1.60;

var imcAmigo = pesoAmigo / (alturaAmigo * alturaAmigo);

mostra("O imc do Amigo é " + imcAmigo);


// criando uma função 

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura); 
    mostra("O imc calculado é " + imc);
}

var pesoPessoa2 = 78;
var alturaPessoa2 = 1.70;
calculaImc(pesoPessoa2, alturaPessoa2);




// 


function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura); 
    return imc;
}

var imcPessoa1 = calculaImc(95, 1.65);
var imcAmigo = calculaImc(88, 1.63);

mostra(imcPessoa1);
mostra(imcAmigo);


// 

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
    return peso / (altura * altura); 
}

var imcPessoa1 = calculaImc(95, 1.65);
var imcAmigo = calculaImc(88, 1.63);
var totalImc = imcPessoa1 + imcAmigo;
document.write("A soma dos imc's é " + totalImc);
pulaLinha()


// interativo 

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

document.write(nome + ", o seu IMC calculado é " + imc);


// 








