const nomes = ["Lilian", "Angelica", "Enzo"];


nomes.forEach(function (nome){
    console.log(nome);
});


// uso de arrow function 
nomes.forEach((nome) => {
    console.log(nome);
});


// usando callback de forma externa
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);




