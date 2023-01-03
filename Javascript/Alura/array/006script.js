// listas com duas dimensões
// arrays que contêm arrays

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];


/*
para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade
O segundo colchete será usado para acessar a informação dentro do array escolhido
*/

console.log(`A funcionária ${funcionarios [0][1]}, de idade ${funcionarios [1][1]} está estudando ${funcionarios [2][1]}`);



console.log(funcionarios);





