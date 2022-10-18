/* primary key identifica a tabela - chave primária

Foreign Key –  como sendo uma chave primária de outra tabela. 
É com esta chave que ocorrem os relacionamentos entre as tabelas de um banco de dados.


existe 3 tipos gerais de JOINS:
INNER JOIN , OUTER JOIN E SELF-JOIN 
*/

SELECT C.ClienteId, C.Nome, E.Rua, E.Cidade
FROM Cliente C
INNER JOIN Endereco E ON E.EnderecoID = C.EnderecoID

SELECT TOP 10 *
FROM Person.PhoneNumberType

SELECT TOP 10 * 
FROM Person.PersonPhone

SELECT pp.BusinessEntityId, pt.Name, pt.PhoneNumberTypeId, pp.PhoneNumber
FROM person.PersonPhone PP 
INNER JOIN Person.PhoneNumberType PT ON PT.PhoneNumberTypeId = pp.PhoneNumberTypeId

-- LEFT OUTER JOIN

-- LEFT JOIN

 

-- EXEMPLO DE USO

 

SELECT * FROM Person.Person;

 

SELECT *

FROM Person.Person PP

INNER JOIN Sales.PersonCreditCard PC

ON PP.BusinessEntityID = PC.BusinessEntityID

-- INNER JOIN : 19118

 

SELECT *

FROM Person.Person PP

LEFT JOIN Sales.PersonCreditCard PC

ON PP.BusinessEntityID = PC.BusinessEntityID

-- LEFT JOIN : 19972

 

SELECT *

FROM Person.Person PP

LEFT JOIN Sales.PersonCreditCard PC

ON PP.BusinessEntityID = PC.BusinessEntityID

WHERE PC.BusinessEntityID IS NULL

--

SELECT [ProductID], [Name], [ProductNumber]

FROM Production.Product

WHERE Name LIKE '%Chain%'

UNION

SELECT [ProductID], [Name], [ProductNumber]

FROM Production.Product

WHERE Name LIKE '%Decal%'

ORDER BY Name asc

-- SELF JOIN

 

SELECT *

FROM Customers

 

SELECT A.ContactName, A.Region, B.ContactName, B.Region

FROM Customers A, Customers B

WHERE A.Region = B.Region