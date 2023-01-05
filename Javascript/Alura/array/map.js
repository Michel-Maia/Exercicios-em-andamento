const notas = [10, 9.5, 8, 7, 6];


// map não altera o array original
/*
notas.map((nota) => {
    return nota
});
*/

/*
const notasAtualizadas = notas.map((nota) => {
    return nota + 1; // soma 1 em todas as notas
});

console.log(notas);
console.log(notasAtualizadas);

*/

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; 
});

console.log(notas);
console.log(notasAtualizadas);






