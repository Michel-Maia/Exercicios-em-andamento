console.log(`condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


const idadeComprador = 18;
const responsavelAcompanhando = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 ||
    responsavelAcompanhando == true;

let contador = 0;
let destinoExiste = false;

/*while(contador <3) {
   
   if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
   }
    contador += 1;
}
*/

// for (let i = 0; i < 3; i++)

for(let contador = 0; contador <3; contador ++) {
   
    if (listaDeDestinos[contador] == destino) {
         destinoExiste = true;
         break;
    }
    
 }
 

console.log("Destino existe: " , destinoExiste);





