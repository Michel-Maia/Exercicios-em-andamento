
function pulaLinha() {

        document.write("<br>");
    }

function mostra(frase) {

        document.write(frase);
        pulaLinha();
    }

    var totalDeEventos = parseInt(prompt("Informe o total de eventos"));

    var contador = 1;
    var totalGastoComEventos = 0;

    while(contador <= totalDeEventos) {

        
        var gasto = parseFloat(prompt("Informe total gasto com evento"));
        totalGastoComEventos = totalGastoComEventos + gasto;
        contador++;
    }

    var media = totalGastoComEventos / totalDeEventos;

    mostra("A média de gastos é " + media);
