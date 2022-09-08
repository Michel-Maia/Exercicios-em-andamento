# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* alinhamento
    * principal
    * cruzado
* espaços entre os itens

# Direção dos itens 

- Flex é uma dimensão(horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: row | row-reverse (linha | linha reversa)
           column | column-reverse (coluna | coluna reversa)

# Flex-wrap

- Podemos usar multi linhas
- Cada nova linha, um novo flex container

# Flex-flow 

- shorthand (maneira curta de escrever mais de uma propriedade)
- flex-direction || flex-wrap

# Justify-content 

- Alinhamento dos elementos dentro do container 
- Distribuição dos elementos 

## valores 

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly 

# align-items

- Alinhamento dos elementos no eixo cruzado

## valores 

- stretch 
- flex-start
- flex-end
- center

# gap

- Espaços entre os elementos

## valores 

Unidades de medidas
fixas: px, pt
flexíveis: %, em, rem 

# Propriedades para os itens 

- flex-basis
- flex-grow
- flex-shrink
- flex
- order