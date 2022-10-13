## Propriedades CSS

### height 

- Define a altura dos elementos. O que não inclui as margens, bordas e espaçamento.

- Permite herança explícita, uma vez definida a altura do elemento pai, é possível herdar para o elemento filho.

* OBS: As propriedades max-height e min-height quando presentes, sobrescrevem a propriedade height. 

| Valores possíveis | auto / length / initial / inherit |
---------------------------------------------------------
| Valor Padrão      |  auto                             |
---------------------------------------------------------
| Valor Herdado     |  não                              |
---------------------------------------------------------

### max-height 

- Define a altura máxima dos elementos. Se o conteúdo for maior que a altura máxima, ele irá gerar um overflow. 


|                   | none/ length / max-content /unset |
| Valores possíveis | min-content/ fit-content(length)  |
|                   | initial/ inherit                  |
---------------------------------------------------------
| Valor Padrão      |  none                             |
---------------------------------------------------------
| Valor Herdado     |  não                              |
---------------------------------------------------------

### min-height 

- Define a altura mínima dos elementos. Se o conteúdo for menor que a altura mínima, ele será duplicado.

- Se o conteúdo for mairo que a altura mínima, a propriedade será ignorada


|                   | none/ length / max-content /unset |
| Valores possíveis | min-content/ fit-content(length)  |
|                   | initial/ inherit                  |
---------------------------------------------------------
| Valor Padrão      |  auto                             |
---------------------------------------------------------
| Valor Herdado     |  não                              |
---------------------------------------------------------