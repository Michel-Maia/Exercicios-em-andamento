
-- DATEPART **AULA EM ANDAMENTO

 

SELECT *

FROM Sales.SalesOrderHeader;

 

SELECT SalesOrderID, DATEPART(month,OrderDate) AS Mes

FROM Sales.SalesOrderHeader;

 