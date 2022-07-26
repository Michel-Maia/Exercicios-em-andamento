$(document).ready(function() {
    $("#botao").click(function(){
        $("div:contains('azul')").addClass("azul");
        $("div:not(:contains('azul'))").addClass("naoAzul");
    });
});