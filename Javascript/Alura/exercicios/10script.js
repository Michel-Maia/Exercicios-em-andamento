
var form = document.querySelector('.adicionar-tarefa');
var botao = document.querySelector('#botao-adicionar');


botao.addEventListener("click", function(event){
    event.preventDefault();

    console.log(form.tarefa.value);
    
});


