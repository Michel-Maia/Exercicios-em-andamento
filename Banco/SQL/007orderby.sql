/* aula 07

    Order by 

obter o productId dos produtos mais caros cadastrados no sistema, listando do mais caro para o mais barato*/
 

SELECT *
FROM Production.Product;

 

SELECT TOP 10 ProductID
FROM Production.Product
ORDER BY ListPrice desc;

 
SELECT *
FROM person.Person
ORDER BY FirstName asc;
 

SELECT *
FROM person.Person
ORDER BY LastName desc;
 

/* Obter o nome e número do produto dos produtos que tem o productID entre 1~4 */
 

SELECT *
FROM Production.Product;
 

SELECT TOP 4 name, ProductNumber
FROM Production.Product
ORDER BY ProductID;

 

 

