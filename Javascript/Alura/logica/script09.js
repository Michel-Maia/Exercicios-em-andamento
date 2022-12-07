
    var loginCadastrado = "alura";
    var senhaCadastrada = "alura321";

    var maximoTentativa = 3;
    var tentativaAtual = 1;

    while (tentativaAtual <= maximoTentativa) {

    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");


    if(loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {

        alert("Bem-vindo ao sistema " + loginInformado);

        tentativaAtual = maximoTentativa;

    } else {

        if (tentativaAtual == 3) { 
            alert("Número permitido de tentativas ultrapassado ");
        } else {
            alert("Login inválido. Tente novamente");
        }
        
    }

    tentativaAtual = tentativaAtual +1;
}



