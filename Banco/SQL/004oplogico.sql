/* aula 04

    Operador lógico

    = IGUAL
    > MAIOR QUE
    < MENOR QUE
    >= MAIOR QUE OU IGUAL
    <= MENOR QUE OU IGUAL
    <> DIFERENTE DE
    AND OPERADOR LÓGICO E
    OR OPERADOR LÓGICO OU 

*/

SELECT *
FROM person.Person;
 

SELECT *
FROM person.Person
WHERE LastName = 'miller' and FirstName = 'anna';

 
SELECT *
FROM production.Product
WHERE color = 'blue' or color = 'black';

 
SELECT *
FROM production.Product
WHERE ListPrice > 1500;
 

SELECT *
FROM production.Product
WHERE ListPrice > 1500 and ListPrice < 5000;


SELECT *
FROM production.Product
WHERE color <> 'red';
 

SELECT *
FROM production.Product;
 

SELECT *
FROM production.Product
WHERE Weight  >= 500 and Weight <= 700;


SELECT Name
FROM production.Product
WHERE Weight  >= 500 and Weight <= 700; 


-- relação de empregados(employee) que são casados(married) e são asalariados(salaried)
 

SELECT *
FROM HumanResources.Employee;
 

SELECT *
FROM HumanResources.Employee
WHERE MaritalStatus = 'm' and SalariedFlag = 1;

-- email do usuário Peter Krebs

SELECT *
FROM Person.EmailAddress;
 

SELECT *
FROM person.Person
WHERE FirstName = 'peter' and LastName = 'krebs';


SELECT *
FROM Person.EmailAddress
WHERE BusinessEntityID = 26;

 
