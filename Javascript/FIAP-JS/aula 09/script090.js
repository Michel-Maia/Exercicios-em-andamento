window.onload = function()
{
    var oRetangulo = document.getElementById("retangulo");

    oRetangulo.onmouseover = function(){
        oRetangulo.style.backgroundColor = "#008000";

    }

    oRetangulo.onmouseout = function(){
        oRetangulo.style.backgroundColor = "";

    }

}