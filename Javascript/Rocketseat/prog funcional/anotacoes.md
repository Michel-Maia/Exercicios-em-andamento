# Programação Funcional 

Fácil manuntenção 
Fácil uso de testes 
    - Funções isoladas e consistentes
Códigos mais confiáveis



### Paradigmas 
Programação Imperativa 
- O código é pensado como um passo a passo 
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações nas variáveis
- Orientação a Objetos é um tipo de paradigma imperativo

Programação Declarativa 
- O código é gerado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passo a passo no código
- Programação funcional é um tipo de paradigma declarativo


### DADOS
Imutalibidade
- Uma variável não vai variar
- Se você precisar mudar uma variável , você não muda você cria uma nova

Stateless
- Não guarda estado
- A função só conhece dados entregues a ela
- A resposta não pode variar


### Funções
Independente
- Deverá ter ao menos 1 argumento
- Deverá retornar algo
- Nada que acontecer lá dentro afeta o mundo externo
    - dados imutáveis
    - não guardar estado


Puras
- Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
- Não deverá sofrer nenhuma interferência do mundo externo a ela
- Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente

Higher-order
- Funções que poderão retornar outras funções
- Funções que recebem funções como argumento

Firt
- Podem estar em qualquer lugar, inclusive como parâmetro de outras funções
- A função poderá ser entendida como uma variável 