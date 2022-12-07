
//var segredo = Math.random(Math.random() * 5);

var segredo = [2, 5, 7];

var input = document.querySelector("input");
input.focus();

    function verifica() {

        var achou = false;

        for(var posicao = 0; posicao < segredo.length; posicao++) {

            if(input.value == segredo[posicao]) {

            alert("Você ACERTOU!");
            achou = true;
            break;

            } 
        }

            if(achou == false) {

                alert("Você ERROU!");
            }

        input.value = "";
        input.focus();

    }

var button = document.querySelector("button");

button.onclick = verifica;





