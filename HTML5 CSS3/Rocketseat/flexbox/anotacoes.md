# Layouts e evolução 

Layout tem a ver com a maneira que os elementos estão distribuidos na tela

## Normal flow 

Ou Flow layout é a maneira que os elementos `block` e `inline` ficam na página

````html
<p> Texto block com <strong>inline</strong>dentro</p>
```` 

## Tables 

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela 

````html
<table>
    <tr>
        <td>Hora</td>
        <td>20:00</td>
    </tr>

    <tr>
        <td>Hora</td>
        <td>20:07</td>
    </tr>
</table>
```` 

## Tabless 

Uso de propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

````html
<div style="float: left">
    esquerda
</div>

<div style="float: right">
    direita
</div>

<div style="clear: both">
    normal
</div>
```` 
    - clear foi usado para limpar o uso do float e voltar ao padrão 


## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor: 

- Alinhamento 
- Ordenação
- Tamanhos flexíveis 


# Terminologia

    - Flex Container
        - Flex item
    - Nesting (elemento dentro de outro elemento)
    - Axis
        - main
            - start, end
        - cross
            - start, end
    - Flex sizing
        - flexível
        - altera width / height dos itens para preenchimento dos espaços do flex container 