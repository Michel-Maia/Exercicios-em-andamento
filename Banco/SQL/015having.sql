/*
    O having é usado para junção com o group by para filtrar resultados de um agrupamento. 

    basicamente seria where para dados agrupados.

Diferença entre HAVING e WHERE
é que o group by é aplicado depois que os dados já foram agrupados, enquanto o WHERE é aplicado antes dos dados serem agrupados. 


    SELECT coluna1,funcaoAgregacao(coluna2)
    FROM nome Tabela
    GROUP BY coluna1
    HAVING condicao;

*/

SELECT StateProvinceID, COUNT(StateProvinceID)
FROM person.Address
GROUP BY StateProvinceID
HAVING COUNT(StateProvinceID) > 1000

SELECT City, COUNT(City)
FROM person.Address
GROUP BY City
HAVING COUNT(City) > 10


SELECT ProductID, AVG(linetotal)
FROM Sales.SalesOrderDetail
GROUP BY ProductID
HAVING AVG(linetotal) < 10000



