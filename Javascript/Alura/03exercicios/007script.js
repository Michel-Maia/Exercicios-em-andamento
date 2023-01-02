console.log(`condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log(listaDeDestinos);

const idadeComprador = 18;
const responsavelAcompanhando = true;

if(idadeComprador >= 18 ||
    responsavelAcompanhando == true
    ){
    console.log("Boa viagem");
    listaDeDestinos.slice(2,1);
    
    } else {
        console.log("Venda bloqueada");
    
}

