function soma(num1, num2)
{
    return num1+num2;
}

window.onload = function()
{
    objBotao = document.getElementById("botao");
    objBotao.onclick = function(){
        objResultado = document.getElementById("resultado");
        objResultado.innerHTML += soma(soma(3, 5), 8)
                                                    + "<br>";
    }
}