window.onload = function()
{

    // Declaração de array com 5 elementos

    var aLinguagens = ["JavaScript",
                        "C#",
                        "Python",
                        "PHP"];

    var objDivSaida = document.getElementById("saida");
    // estrutura for ... of

    for(sLinguagem of aLinguagens) {
        objDivSaida.innerHTML += sLinguagem+"<br>";
    }                        
}