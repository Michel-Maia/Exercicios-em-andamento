/*
const arrayVazia = [];

console.log(arrayVazia);
console.log(arrayVazia.length);

console.log(arrayVazia[0]); // undefined



const arrayVazia = [,,,];
console.log(arrayVazia.length); // 3
console.log(arrayVazia[0]); // undefined
console.log(arrayVazia[1]); // undefined
console.log(arrayVazia[2]); // undefined
// podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.
*/

const arrayVazia = [,,,];
console.log(arrayVazia.length); // 3

arrayVazia.push(50); // add no final 

console.log(arrayVazia); // [ <3 empty items>, 50 ]

console.log(arrayVazia.length); // 4

