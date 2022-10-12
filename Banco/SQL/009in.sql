/*
Aula 09

- IN

Operador IN é usado com o WHERE, para verificar se um valor corresponde com qualquer valor passado na lista de valores. 
 
valor IN (valor1, valor2)
valor IN (SELECT valor FROM nomeDaTabela)

*/

SELECT *
FROM Person.Person
WHERE BusinessEntityID IN (2,7, 13);
 

SELECT *  /* Ex sem o uso do IN */
FROM Person.Person
WHERE BusinessEntityID = 2
OR BusinessEntityID = 7
OR BusinessEntityID = 13;
 

SELECT *
FROM Person.Person
WHERE BusinessEntityID NOT IN (2,7, 13);
