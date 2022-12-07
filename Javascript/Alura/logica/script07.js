function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}


var anoCopa = 1930; 

// enquanto 
while(anoCopa <= 2025) {
    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;
}

mostra("Fim"); 



