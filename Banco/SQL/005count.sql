/* Aula 5

COUNT - contagem

*/

SELECT COUNT(DISTINCT coluna1) 
FROM TABELA 


SELECT COUNT(*)
FROM person.Person;


SELECT COUNT(title)
FROM person.Person;


SELECT COUNT(DISTINCT title)
FROM person.Person;
 

/* quantidade de produtos cadastrados na tabela produtos*/

SELECT *
FROM Production.Product;
 

SELECT COUNT(DISTINCT Name)
FROM Production.Product;  -- 504
 

/* quantos tamanhos de produtos tem cadastrado*/

SELECT COUNT(Size)
FROM Production.Product; --211
 

SELECT COUNT(DISTINCT Size)
FROM Production.Product; -- 18

 

 
