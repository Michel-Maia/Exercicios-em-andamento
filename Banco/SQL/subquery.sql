-- SUBQUERY (SUBSELECT)
 

SELECT * FROM Production.Product;

 

SELECT AVG(ListPrice)

FROM Production.Product;

 

SELECT *

FROM Production.Product

WHERE ListPrice > 438.66;

 

SELECT *

FROM Production.Product

WHERE ListPrice > (SELECT AVG(listPrice) FROM Production.Product);

 

-- primeiro nome de funcionários que tenha o cargo de Design Engineer

 

SELECT * FROM Person.Person;

 

SELECT * FROM HumanResources.Employee;

 

SELECT FirstName

FROM Person.Person

WHERE BusinessEntityID IN (SELECT BusinessEntityID FROM HumanResources.Employee

WHERE JobTitle = 'Design Engineer');

 

 

-- todos os endereços que estão no estado de Alberta

SELECT * FROM Person.Address;

 

SELECT * FROM Person.StateProvince;

 

SELECT AddressLine1

FROM Person.Address

WHERE StateProvinceID IN (SELECT StateProvinceID FROM Person.StateProvince

WHERE Name = 'Alberta');

