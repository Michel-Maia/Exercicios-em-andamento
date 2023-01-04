const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

/*
se quiser percorrer matrizes, um único for não será suficiente. Mas pode usar o for várias vezes, uma para cada dimensão da matriz. 
uma matriz de duas dimensões usará dois for, um dentro do outro. 
*/ 

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media1 = 0



for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) { 
      media1 += notasGerais[i][j]/notasGerais[i].length;
    }
  }


// No primeiro for , usa let i e executa o bloco de código enquanto i for menor que notasGerais.length

//Como tem 3 elementos (arrays) o primeiro for será executado 3 vezes, com i=0,i=1,i=2

/* o segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida,  e vamos executá-lo enquanto j for menor que notasGerais[i].length. 
Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.
O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. 
Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta
*/ 

/*
para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 edividir pela quantidade de arrays em notasGerais

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)

*/









