window.onload = function()
{
    var objDivSaida = document.getElementById("saida");

    var i=1;
    while(i <= 10) // enquanto 
    {
        objDivSaida.innerHTML += i+ "<br>";
        i++;
    }
}