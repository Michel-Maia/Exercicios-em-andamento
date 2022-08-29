# Layouts e evolução 

Layout tem a ver com a mentoria que os elementos estão distribuídos na tela

## Normal flow 

Ou flow Layout é a maneira que os elementos `block` e `inline` ficam na página 

````html
<p> Texto block com <strong> inline </strong> dentro </p>
```` 

## Tabelas - Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como
`td` e `tr` possam ser usados para montar uma tabela

````html 
<table>

    <tr>
        <td>Hora</td>
        <td>20:05</td>
    </tr>

    <tr>
        <td>Hora</td>
        <td>20:37</td>
    </tr>

</table>
```` 

## Tabless 

Uso das propriedades `float` , `clear` para que os elementos possam mudar de posição na tela. 

````html
<div style="float: left">
    esquerda
<div>

<div style="float: right">
    direita
<div>

<div style="float: both">
    normal
<div>
```` 

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor: 

- Alinhamento
- Ordenação 
- Tamanhos flexíveis 


# Terminologia 

    - Flex Container
        - Flex item
    
    - Nesting (ideia de elemento dentro de elemento) 

    - Axis (eixo)
        - main
            - start, end
        - cross
            - start, end

    - Flex sizing (item ser flexível)
        - flexível
        - altera width/ height dos itens para preenchimento dos espaços do flex container 