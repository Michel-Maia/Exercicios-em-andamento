// operadores lógicos

console.log(`condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log(listaDeDestinos);

const idadeComprador = 17;
const responsavelAcompanhando = true;

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    
} else {
    if(responsavelAcompanhando) {
    console.log("Responsável acompanhando");
    listaDeDestinos;
    
    } else {
        console.log("Venda bloqueada");
    }

}







