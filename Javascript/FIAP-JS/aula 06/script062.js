window.onload = function()
{
    var objTxtSigla  = document.getElementById("sigla");
    var objDivResultado = document.getElementById("resultado");
    var objBotao = document.getElementById("botao");

    objBotao.onclick = function()
    {
        switch(objTxtSigla.value)
        {
            case "SP":
                objDivResultado.innerHTML = "São Paulo";
            break;
            case "RJ":
                objDivResultado.innerHTML = "Rio de Janeiro";
            break;
            case "MG":
                objDivResultado.innerHTML = "Minas Gerais";
            break;
            case "ES":
                objDivResultado.innerHTML = "Espírito Santo";
            break;
            default:
                objDivResultado.innerHTML = "Não é um estado do sudeste";

        }
    }
}