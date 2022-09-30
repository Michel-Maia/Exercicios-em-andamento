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

  
