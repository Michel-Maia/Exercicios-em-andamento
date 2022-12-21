// conversão de texto e booleano 
//Number()

// calcular a área de um retângulo
let largura = "10";
let altura = "5";

console.log(Number(largura) * Number(altura)); 
// conversão de String para números, possibilitando a realização da da multiplicação


let largura1 = "20";
let altura1 = "10";

console.log( + largura1 * + altura1); 
// conversão de String para números realizado usando o + antes das variáveis


let meuNome = "Seu Nunca";
console.log(Number(meuNome)); 
// variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);

console.log( + meuNome); 
// a conversão também retornará NaN


let usuarioConectado = false;
console.log(Number(usuarioConectado));
// conversão da booleana para número, sendo que false (falso) retorna o número 0.

usuarioConectado = true;
console.log(Number(usuarioConectado)); 
// conversão de true (verdadeiro) para o número 1.









