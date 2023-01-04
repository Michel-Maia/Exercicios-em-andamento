/*
O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.
*/

for (let indice = 0; indice <= 10; indice++) {
    console.log(indice);
  }
  
/*
O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado

for (let indice = 0; indice <= 10; ) {
  console.log(indice);
}

ou se o for for executado sem a segunda expressão, que é a condição de execução

for (let indice = 0; ; indice++) {
  console.log(indice);
}

Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática

for (let indice = 0; indice < 10; indice++) {
  indice--;
  console.log(indice);
}


*/

