var input = document.querySelector("input");

    function exibeTexto() {
        alert(input.value)
    }

var button = document.querySelector("button");

button.onclick = exibeTexto;
