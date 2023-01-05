## for, for…of, forEach()


### for
A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens, o for é muito conveniente pois pode ser utilizado com qualquer tipo de iterável e é construído de uma forma que deixa muito claro quais são todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.

O que é um “iterável”? Além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados iteráveis. 
um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando ferramentas próprias para isso. É importante fazer uma distinção entre array e iterável, pois nem todo método que funciona em um array vai funcionar em outros iteráveis - veremos isso em seguida.

```` js
const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
 console.log(lista[indice]); 
}
````

- uma variável contadora, que é criada antes do início do laço (let indice);

- uma expressão de teste (indice < lista.length), que é executada antes de cada iteração e que verifica se o código dentro do bloco {} deve ou não ser executado;

- por último, uma expressão que é executada ao final de cada laço, normalmente um incremento (++) ou decremento (--) da variável contadora.


Ou seja: como as fases de cada laço são declaradas de forma explícita, elas também podem ser alteradas conforme a necessidade do código, o que faz com que o for seja muito versátil e possa ser utilizado em casos específicos, quando os outras formas de sintaxe mais reduzida não atendem. 

O laço pode ser decremental ao invés de incremental (percorrer um array de trás para frente), a variável contadora pode receber outro valor como let indice = 2 ou let indice = outraVariavel + 1 (desde que esse valor seja avaliado como número), a condição de teste pode ser o tamanho do array como no exemplo, ou outro (indice < lista.length - 1) e o incremento ou decremento ao final do laço pode receber qualquer operador aritmético ou ser o resultado de uma operação, como indice = indice + 2 ou indice *= 2.

É possível, inclusive, usar o for para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos, por exemplo:


````js
const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}

//1
//3
//5
//7
//9
````

### for…of
Adicionado às funcionalidades do JavaScript na versão ES6, é um tipo de laço de repetição diferente do for tradicional, embora utilize a mesma palavra-chave:

````js
const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista) {
 soma += elemento;
}

console.log(soma) //15
````

O for…of pode ser executado utilizando qualquer tipo de iterável: além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados objetos iteráveis.

um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando o for…of. É importante fazer esta distinção entre array e iterável, pois nem todo método ou declaração que funciona em um array vai funcionar em outros iteráveis.

Olhando assim, o for…of se parece bastante com o for: temos a declaração de uma variável (let elemento) seguida da palavra-chave for e um identificador do iterável que será percorrido (no caso acima é um array mesmo, lista).

A diferença principal e mais visível entre o for e o for…of é que o anterior dá muito mais controle sobre de que forma o laço de repetição ocorre. Por exemplo, vimos que no for é possível manipular de forma mais fina todas as condicionais; já no for…of as condições são mais “fixas”: elemento se refere a cada elemento (ou item) do array e o loop sempre ocorre de forma sequencial, do primeiro elemento até o último.

Em contrapartida, a sintaxe simplificada e mais “legível” para pessoas faz com que o uso do for…of seja mais prático do que o for, pois laços de repetição mais simplificados, que percorrem um iterável do primeiro ao último elemento e executam o código do bloco a cada iteração, são muito mais corriqueiros.

### forEach()
Ao contrário de for e for…of, o forEach() é um método do objeto Array.

* chamamos de método uma função que é propriedade de um objeto, quando dizemos que determinada função - por exemplo, forEach() é um método de array, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.

O forEach(), assim como outros métodos de array que vimos ou ainda vamos ver durante esta aula, também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos. No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.

O forEach() utiliza a abordagem funcional de funções callback para executar o código necessário a cada elemento iterado no laço:

````js
const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15
````

o método forEach() recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do forEach() vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento soma += numero) seja executado a cada iteração.

O mesmo código também poderia ser escrito da seguinte forma, um pouco mais extensa porém mais legível:

````js
lista.forEach(numero => {
 soma += numero
});
````

Ou ainda, utilizando a palavra-chave function ao invés de arrow functions; essa forma de escrita não é usual, pois quando usamos funções callback o padrão adotado é o de arrow functions, mas serve para o propósito de legibilidade:

````js
lista.forEach(function (numero) {
 soma += numero
});
````
Assim, vemos que o forEach() não retorna nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback, assim como for e for…of. Porém também não é possível modificar a forma que a iteração será feita (é sempre do primeiro elemento do array ao último) e não há forma de interromper o laço dada alguma condição, como o break funcionaria para um for normal.

O forEach() também não pode ser utilizado com qualquer iterável, apenas com arrays e também não pode ser utilizado de forma assíncrona


### forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

### for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);

### for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).



