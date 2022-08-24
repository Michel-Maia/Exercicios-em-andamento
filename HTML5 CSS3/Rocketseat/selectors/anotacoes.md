# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento 

## Tipos

* Element selector
    - Todos os elementos HTML
    
* ID Selector
    - Um ellemento que tenha um atributo `id`. 
    - Cada id deverá ser único.

* Class Selector
    - Os elementos que contenha um atributo `class`
    - Podemos ter uma ou mais classes.

* Attibute Selector
    - Um elemento que tenha um atributo específico

* Pseudo-class selector 
    - Elementos em um estado específico

## Múltiplos 

é possível selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por vírgula para isso.

````css 

h1, p, a {
    color: red;
}
````

# Combinators 

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Indentificado por um espaço entre os seletores
* Busca um elemento dentro do outro 

````css
body article h2
```` 

## Child combinator 

* Identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

## Adjacent sibling combinator  - combinador irmão 

* Identificado pelo sinal de ` + ` entre os dois seletores
* Seleciona somente o elemento do lado direto que é irmão direto na hierarquia 

## General sibling combinator - irmão combinado de maneira geral 

* Identificado pelo sinal `~ ` entre dois seletores
* Seleciona todos os elementos irmãos 

````css
h1 ~ p 
```` 

## Utilizando combinadores 

````css
ul > li [class="red"]
````

## Dica 

* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente. 

