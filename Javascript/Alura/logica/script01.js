
var minhaIdade = 20;

document.write("Eu nasci em " + (2016 - minhaIdade) );


// 


    document.write("5 vezes 1 é " + 5 * 1+ "<br>");
    document.write("5 vezes 2 é " + 5 * 2+ "<br>");
    document.write("5 vezes 3 é " + 5 * 3+ "<br>");
    document.write("5 vezes 4 é " + 5 * 4+ "<br>");
    document.write("5 vezes 5 é " + 5 * 5+ "<br>");
    document.write("5 vezes 6 é " + 5 * 6+ "<br>");
    document.write("5 vezes 7 é " + 5 * 7+ "<br>");
    document.write("5 vezes 8 é " + 5 * 8+ "<br>");
    document.write("5 vezes 9 é " + 5 * 9+ "<br>");
    document.write("5 vezes 10 é " + 5 * 10+ "<br>");

// 

var tanque = 40;
var caminhoComGasolina = 480;
var consumoDeGasolina = caminhoComGasolina/tanque;

var caminhoComAlcool = 300;
var consumoDeAlcool = caminhoComAlcool/tanque;


document.write(" O consumo de gasolina é de" + consumoDeGasolina + "Km/L");
document.write("<br>");
document.write("O cosumo de alcool é de " + consumoDeAlcool + "Km/L"); 



//

// quando uso uma variavél não precisa alterar o código todo somente a variavél ex se precisar tocar o ano em vários lugares do código 

var ano = 2016;

//escreve na tela
document.write("Fulano tem" + (ano - 2000) + "anos"); 
                            //pega a var ano e subtrai 

// resultado na tela
// Fulano tem 22 anos

document.write("<br>"); // para pular a linha

// código da explicação


var ano = 2016;

document.write("Flávio tem " + (ano - 1977) + " anos");
document.write("<br>");
document.write("Joaquim tem " + (ano - 1996) + " anos");
document.write("<br>");

ano = 2017;
document.write("Barney tem " + (ano - 1976) + " anos");
document.write("<br>");


// criado função pulo linha

    var ano = 2016;
    var puloLinha = "<br>";

    document.write("Flávio tem " + (ano - 1977) + " anos");
    document.write(puloLinha);
    document.write("Joaquim tem " + (ano - 1996) + " anos");
    document.write(puloLinha);

    ano = 2017;
    document.write("Barney tem " + (ano - 1976) + " anos");

// 

    function pulaLinha() {

        document.write("<br>");
        document.write("<br>");

}

var ano = 2016;

document.write("Flávio tem " + (ano - 1977) + " anos");
pulaLinha();

document.write("Joaquim tem " + (ano - 1996) + " anos");

pulaLinha();

ano = 2017;
document.write("Barney tem " + (ano - 1976) + " anos");



//

document.write(Math.round(3/4)); // math.round é uma função matemática, avisa pro programa realizar aquela equação


// cria a função mostra para deixar mais fácil a manutenção

function mostra(frase) {

    document.write(frase);

}

mostra("Olá pessoal!");

//

function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase){ // essa frase será oq tiver dentro do mostra 

    document.write(frase);
}

mostra("Olá pessoal!");

var ano = 2016;

mostra("Flávio tem " + (ano - 1977) + " anos"); // e pode alterar o 

pulaLinha();

mostra("Joaquim tem " + (ano - 1996) + " anos");

pulaLinha();

ano = 2017;

mostra("Barney tem " + (ano - 1976) + " anos");


// deixar mais fácil

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

// 