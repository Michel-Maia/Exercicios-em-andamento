var minhaLista = ["Abacaxi", "Limão", "Uva", "Banana"];


function exibirLista(arr) {

    var retornoLista = " ";

    for(i=0; i<=arr.length-1; i++) {

    retornoLista += i + " - " + arr[i] + "<br>"
    }

    document.getElementById("lista").innerHTML = retornoLista;
}

    function inserirItem(arr) {

        var novoItem = prompt("Digite o novo item: ");

        if(novoItem != null && novoItem != "") {

            arr.push(novoItem);

        } else {
            
            alert("Nenhum item foi digitado! ");
        }

     

        exibirLista(arr);
    }

    function removerItem(arr) {

        var item = prompt("Digite o número do item a ser removido: ");

        if(Item != null && Item != "") {

        arr.splice(item,1);

        } else{
            alert("Nenhum item digitado: ")
        }

        exibirLista(arr);

    }

    
    exibirLista(minhaLista);