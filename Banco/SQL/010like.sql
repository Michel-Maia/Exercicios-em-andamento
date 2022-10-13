
/* LIKE

Encontrar uma informação que não tenho por completo ex nome que começa com li... */ 

SELECT *
FROM person.Person
WHERE FirstName like 'li%'; -- ex buscar nome com começo Li (Lilian)

SELECT *
FROM person.Person
WHERE FirstName like '%essa%'; -- ex buscar nome com meio essa (Vanessa)

SELECT *
FROM person.Person
WHERE FirstName like '%to'; -- ex buscar nome com final to (Roberto)



-- quantos produtos cadastrados tem a palavra 'road' no nome deles

SELECT COUNT(*)
FROM Production.Product
WHERE name like '%road%; 


