window.onload = function()
{
    var objDivSaida = document.getElementById("saida");

    for(var i=1;i<=10;i++) // para
    {
        objDivSaida.innerHTML += i+"<br>";
    }
}