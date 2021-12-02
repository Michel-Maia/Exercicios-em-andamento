function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.logradouro;
            document.getElementById("localidade").innerHTML = response.logradouro;
            document.getElementById("uf").innerHTML = response.logradouro;
        }
    })
}