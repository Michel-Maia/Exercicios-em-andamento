### Anotações ### 

Sintaxe 


header, section, footer {
                            background: black; 
}

Grupo de seletores - pode ser vários, sendo separados por , 
header, section, footer 


 Bloco de declarações
 {  }


Propriedade da declaração
background


 separador 
 : 

 
valor da declaração
 black



  fim da declaração
  ;


## Dicas CSS

Atenção no nome 
arquivos duplicados
.class
#id 
atenção no grau de especificidade 


* quebra de especificidade 
        exemplo: 

````css        

.bloco {
    background-color: red!important;
} 
```` 


### Posição 

  Esta propriedade define como um elemento deve ser renderizado/posicionado na página. 

  Por padrão todos os elementos são posicionados estaticamente(static) o que faz com que o espaço seja ocupado apenas por ele mesmo.

  Além de static, temos: fixed, absolute, relative e sticky como valores possíveis para posicionamento. 

    - static: dos cinco valores este é o único que não será afetado pelas propriedades de deslocamento top, right, bottom e left. 

    - fixed: Esta posição faz com o elemento fique posicionado fixamente em relação a janela de visualização. O que fará com que não tenha sua posição afetada mesmo quando o scroll da página for rolado.

    - absolute: Esta posição faz com o elemento fique posicionado fixamente em relação ao ancestral posicionado mais próximo. Caso não existe nenhum elemento ancestral posicionado ele usará o corpo da página como relação. isso fará com que ele acompanhe o scroll quando a página for rolada. 

    - sticky: Esta posição faz com o elemento se comporte como relative e fixed em determinados momentos. Ele é posicionado em relação até que encontre uma determinada posição na janela de exibição e passe a se comportar como fixo. 

### Flexible Box Module

  Módulo de caixa flexível, mais conhecido por "Flexbox" é um método capaz de organizar oe elementos de uma interface de modo unidimensional. 

  É possível definir a organização dos elementos como linha ou coluna e usar recursos para alinhar e distribuir após isso.

- Eixos do Flexbox
  Ao definir a dimensão(linha ou coluna) por meio da propriedade flex-direction, este eixo será tratado como o principal e o outro como eixo transversal.

### Valores Globais

  Os valores globais podem ser utilizados em todas as propriedades CSS a menos que tenha alguma regra especifica como exceção. 

- initial 
  Este valor irá forçar a reinicialização do valor padrão da propriedade. (voltar o valor padrão)

- inherit
  Este valor irá atribuir a herança explícita para a propriedade aplicada. Assim caso o elemento pai possua a mesma propriedade com algum valor esse será replicado para o elemento em questão. 

- unset
  Este valor desabilita a propriedade em questão.

- revert
  Este valor tem a mesma função do valor initial porém é aplicado apenas ao navegador Safari.

  
### Layout em grade

  A especificação CSS Grid Layout permite a criação de layout bidimensional,  trabalhando com linhas e colunas, permitindo a criação de inúmeras variações de tipos de layout. 

  Organizando elementos em linhas e colunas, com Grid Layout é possível criar layout semelhante ao que era feito com tabelas porém diferentemente das tabelas, os elementos filhos podem se sobrepor a outros conteúdos, dando aos elementos HTML o poder de ser alocado em qualquer parte do layout.

  Assim como o módulo flexbox, o módulo grid layout também irá trabalhar com um container que funcionará como um wrapper ou embrulho dos elementos internos denominados grid items. 

* Grid Container
  O elemento que receberá a propriedade display: grid é chamado de grid container e podemos dizer que será o elemento pai de todos os itens de grade. 

* Grid Lines
  Qualquer linha vertical ou horizontal de uma grade que faz as divisões entre linhas e colunas são linhas de grade ou grid lines.

* Grid Cells
  Cada espaço de uma grade é chamado de célula de grade ou grid cell, também conhecida como unidade da grade.

* Grid Track 
  O espaço entre duas linhas adjacentes, horizontais ou verticais, são chamados de Faixa de grade ou em inglês grid track. 

* Grid Area
  O espaço total gerado por quatro linhas de grade, formando um grupo de células é chamado de área de grade ou grid area. 

* Gutters 
  Gutters são os espaços entre as linhas ou colunas da grade. Como que calhas podem fazer uma separação entre esses elementos da nossa grade.

## Combinador Descendente 

- Dois seletores combinados com espaço entre as tags, isso significa que estou selecionando todas as tags 

````css 
form input {
    color: blue;
}

```` 

## Combinador Filho Direto

- Sinal de > seleciona o filho direto 

````css
form > input {
    color: blue;
}

````

## Combinador Irmão Adjacente

- Sinal de + seleciona o seletor que tem irmão adjacente (próximo irmão)

````css
form + div {
    color: blue;
}
````

## Combinador Irmão geral

- Sinal ~ segundo elemento somente se ele for precedido pelo primeiro e se ambos compartilharem o mesmo pai

````css
form ~ div {
    color: blue;
}
````


