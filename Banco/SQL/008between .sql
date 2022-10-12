/* 
Aula 08 

- Between (entre)
valor BETWEEN mínimo AND máximo;

ex. idade BETWEEN 18 AND 30;

O between é usado para encontrar valor entre um valor mínimo e valor máximo

*/ 

SELECT *
FROM Production.Product
WHERE ListPrice BETWEEN 1000 AND 1500;
 

SELECT *
FROM Production.Product
WHERE ListPrice NOT BETWEEN 1000 AND 1500;
 

SELECT *
FROM HumanResources.Employee
WHERE HireDate BETWEEN '2009/01/01' AND '2010/01/01'
ORDER BY HireDate;


 
