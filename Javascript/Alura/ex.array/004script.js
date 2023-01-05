var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];


// acessar elementos de um array

var primeiroItem = listaDeFrutas[0]; // Pega o item 'Maçãs'
var segundoItem = listaDeFrutas[1]; // Pega o item 'Uvas'
var terceiroItem = listaDeFrutas[2]; // Pega o item 'Bananas'

// Outra forma de acessar os elementos de um array é percorrendo todos os elementos através de estruturas de repetição como while, for, e forEach().

console.log(listaDeFrutas);


listaDeFrutas.forEach(function (item, indice) {
    console.log(item, indice);
  });
  // Maçãs 0
  // Uvas 1
  // Bananas 2
  // Abacaxi 3
  // Morangos 3

// acessar o índice de um elemento com o indexOf()

var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
var pos = listaDeFrutas.indexOf('Bananas');
//pos = 2

// adicionar um elemento no final push()

var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.push('Laranjas');
// ['Maçãs','Uvas','Bananas','Abacaxi','Morangos', 'Laranjas']

// adicionar um elemento no início do array  unshift()

var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.unshift('Laranjas');
// ['Laranjas','Maçãs','Uvas','Bananas','Abacaxi','Morangos]

// remover um elemento do início shift()

var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.shift();
// ['Uvas','Bananas','Abacaxi','Morangos']

// Para remover um elemento do final pop()

var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.pop();
// ['Maçãs','Uvas','Bananas','Abacaxi']


// remover um item a partir de seu índice com o método splice()

var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
var pos = listaDeFrutas.indexOf('Abacaxi'); //pos = 3
listaDeFrutas.splice(pos, 1)
// ['Maçãs','Uvas','Bananas','Morangos']





















