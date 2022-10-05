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
### Boolean


## Referências

- [mozilla] https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

Canal youtube do Rodrigo Branas 
- Série sobre Javascript 
- [Youtube] https://www.youtube.com/watch?v=093dIOCNeIc&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc

- Série sobre Aprenda a Programar
- [Youtube] https://www.youtube.com/watch?v=0UNPfBAM0dg&list=PLQCmSnNFVYnSP1w3ugIZbxwR-QLO1hvlR
