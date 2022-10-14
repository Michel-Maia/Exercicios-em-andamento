/*

GROUP BY 

vai dividir o resultado da sua pesquisa em grupos

*/

SELECT coluna1, funcaoAgregacao(coluna2) 
FROM nomeTabela
GROUP BY coluna1;

SELECT * 
FROM Sales.SalesOrderDetail

SELECT SpecialOfferID, SUM(UniPrice) AS "Soma"
FROM Sales.SalesOrderDetail
GROUP BY SpecialOfferID;

-- quantos cada produto foi vendido até hoje 

SELECT * FROM Sales.SalesOrderDetail

SELECT ProductID, COUNT(ProductID) AS "Contagem"
FROM Sales.SalesOrderDetail
GROUP BY ProductID


-- quantos nomes de cada nome tem cadastrado 

SELECT FirstName, COUNT(FirstName) AS "Total"
FROM Person.Person
GROUP BY FirstName

SELECT MiddleName, COUNT(MiddleName) AS "Nome do meio"
FROM Person.Person
GROUP BY MiddleName

-- quantidade que cada produto é vendido

SELECT ProdutId, AVG(OrderQty) 
FROM Sales.SalesOrderDetail
GROUP BY ProductId;

