const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];

console.log(numeros);
// [[2,4,6], [1,3,5]]

// para não ser um array de array usando destructuring
// ... abrir o array 

const numerosPares1 = [2, 4, 6];
const numerosImpares1 = [1, 3, 5];

const numeros1 = [...numerosPares1, ...numerosImpares1];

console.log(numeros1);
// [2,4,6,1,3,5]

/*
const num1 = 1;
const num2 = 2;

console.log(num1,num2);
// 1 2 

*/


const [num1, num2] = [1,2];
console.log(num1, num2);
// 1 2 










