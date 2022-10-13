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
 

-- quantidade de produtos cadastrados na tabela produtos

SELECT *
FROM Production.Product;
 

SELECT COUNT(DISTINCT Name)
FROM Production.Product;  -- 504
 

-- quantos tamanhos de produtos tem cadastrado

SELECT COUNT(Size)
FROM Production.Product; --211
 

SELECT COUNT(DISTINCT Size)
FROM Production.Product; -- 18

 


-- Quantos produtos temos cadastrado no sistema que custam mais que 1500 dolares ?

SELECT COUNT(ListPrice)
FROM Production.Product
WHERE ListPrice > 1500;  



-- Quantas pessoas temos com o sobrenome que inicia com a letra P

SELECT *
FROM Person.Person;

SELECT COUNT(LastName)
FROM Person.Person
WHERE LastName LIKE 'P%';

-- quantos produtos vermelhoss tem preço entre 500 a 1000 dolares

SELECT COUNT(*)
FROM Production.Product
WHERE color = 'red'
AND ListPrice BETWEEN 500 AND 1000; 


--Em quantas cidades únicas estão cadastradas nossos clientes 

SELECT COUNT(DISTINCT(city))
FROM person.Address;


-- quais são as cidades únicas que temos cadastrados em nosso sistema

SELECT DISTINCT(city)
FROM person.Address
