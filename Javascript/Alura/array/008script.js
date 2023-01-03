const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]]);

console.log(arrayConcat);
console.log(arrayOriginal);


//80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.


/*
concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
*/


