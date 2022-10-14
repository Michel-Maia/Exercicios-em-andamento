/*

MIN MAX SUM AVG

Funções de agregação  basicamente ou
 combinam dados de uma tabela em 1 resultado só 
*/


SELECT TOP 10 *
FROM Sales.SalesOrderDetail 

-- soma
SELECT TOP 10 SUM(linetotal) AS "Soma"
FROM Sales.SalesOrderDetail 



SELECT TOP 10 *
FROM Sales.SalesOrderDetail 

-- menor valor
SELECT TOP 10 MIN(linetotal) 
FROM Sales.SalesOrderDetail

-- maior valor
SELECT TOP 10 MAX(linetotal) 
FROM Sales.SalesOrderDetail

-- média
SELECT TOP 10 AVG(linetotal) 
FROM Sales.SalesOrderDetail
