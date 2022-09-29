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