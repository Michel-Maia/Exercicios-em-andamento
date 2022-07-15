function soma(num1, num2)
{
    return num1+num2;
}

window.onload = function()
{
    objBotao = document.getElementById("botao");
    objBotao.onclick = function(){
        objTxtNum1 = document.getElementById("num1");
        objTxtNum2 = document.getElementById("num2");
        objResultado = document.getElementById("resultado");
        objResultado.innerHTML += soma(
            parseInt(objTxtNum1.value),
            parseInt(objTxtNum2.value) ) + "<br>";
        
    }
}