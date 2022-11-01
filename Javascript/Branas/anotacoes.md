# Javascript

Linguagem intrerpretada

- Possui Orientação a objetos baseada em protótipos, não possuindo classes
- Não tem classe, criado objeto
- A linguagem possui uma tipagem fraca e dinâmica
- Possui funções de primeira classe
- A linguagem não apresenta suporte a programação multi-thread

As variáveis devem ser criadas seguindo as regras:
* Devem começar por uma letra, $ ou_ 
        letra já é usada como regra 
        $ usado com framework e bibliotecas
        _  indicar que algum membro é privado 

* Pela convenção, começam com letra minúscula e usam camelCase
* São case-sensitive (faz diferença usar M m)

### Number 

Só existe um tipo numérico na linguagem e ele tem as seguintes características: 
- IEEE-754 (Standard for Floating-Point)
- binary64 ou Double Precision
- Cuidado com as exceções exemplos:
        0.1 + 0.2 = 0.30000000000000004
        3 / 0 = Infinity
        "AulaJS" * 10 = NaN

````js
var nota = 10;

nota.toExponencial(2); // 100
nota.toFixed(2); // 10.000
nota.toPrecision(1); // 1e+1
nota.toString();//"10"
nota.valueOf();//10

````

* Math API 

Similar a classe Math da linguagem Java (exemplos)

        * abs - Valor absoluto do número
        * floor - Valor inteiro do número
        * log - Logarítmo natural do número (base E)  
        * min - Retorna o menor número  
        * max - Retorna o maior número  
        * pow - Potência do número  
        * random - Gera um número randômico  
        * round -  Arrendonda o número para o inteiro mais próximo
        * sin - Seno do número  
        * sqrt - Raiz quadrada do número  
        * tan -  Tangende do número

### String

Uma string é composta por uma sequência de 0 ou mais caracteres com as seguintes características:
- São imutáveis
- Podem ser declaradas com aspas 'simples' ou "duplas"

````js
var nome = "AulaJS";

nome.charAt(2); 
nome.charCodeAt(0); 
nome.concat("!"); 
nome.indexOf('a'); 
nome.replace('Code','!');
nome.split('e'); 

````

* String API

        * charAt - Retorna o char da posição
        * charCodeAt - Retorna o código do char da posição
        * concat - Concatena duas Strigs
        * indexOf - Retorna o índice da primeira ocorrência do char
        * lastIndexOf - Retorna o índice da última ocorrência do char
        * length - Retorna o tamanho da String
        * match - Retorna uma array resultante da busca com RegExp
        * replace - Substitui parte da String por outra
        * search - Retorna a posição da String ou RegEXp
        * split - Divide a String com base na expressão regular informada
        * substring - Extrai a parte da String desejada
        * toLowerCase - Gera uma nova String em letra minúscula
        * toUpperCase - Gera uma nova String em letra maiúscula
        * trim - Remove os espaços em branco do início e do fim da String
        * valueOf - Retorna o valor primitivo da String


### Boolean

A linguagem Javascript assume o estado de determinados tipos como true ou false, dependendo do caso.


ex. valores avaliados como false os demais sempre será true

!!0
false

!!NaN
false

!!''
false

!!null
false

!!undefined
false





````js
var isento = true;
var estudante = false;

isento.toString(); // true
estudante.valueOf(); // false

````

### Undefined / null 

O tipo undefined é retornado caso uma propriedade de um determinado objeto seja consultada e não exista

null - é ausência de valor

````js
var pessoa = {};

pessoa
{}

pessoa.idade
// undefined

pessoa.nome = "Lilian"
'Lilian'

pessoa.idade = 30

pessoa
{ nome: 'Lilian', idade: 30 }

for(var propriedade in pessoa) {
        console.log(propriedade);
}

nome
idade

// undefined

````

### Object




## Referências

- [mozilla] https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Canal youtube do Rodrigo Branas 
- Série sobre Javascript 
- [Youtube] https://www.youtube.com/watch?v=093dIOCNeIc&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc

- Série sobre Aprenda a Programar
- [Youtube] https://www.youtube.com/watch?v=0UNPfBAM0dg&list=PLQCmSnNFVYnSP1w3ugIZbxwR-QLO1hvlR
