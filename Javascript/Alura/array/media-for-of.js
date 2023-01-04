const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// para cada elemento de notas execute o código dentro {}
/*
for (let elemento of notas) {
    console.log(elemento);
}
*/

for (let nota of notas) {
    somaDasNotas += nota;
}


//console.log(somaDasNotas);

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);










