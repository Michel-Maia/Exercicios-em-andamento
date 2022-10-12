 -- Distinct omitir dados duplicados 

SELECT DISTINCT coluna1, coluna2
FROM tabela

/* Verificar quantos sobrenomes únicos existe na tabela Person*/

SELECT DISTINCT LastName
FROM person.Person;  -- 1206

SELECT nomecoluna,nomecoluna
FROM tabela
WHERE (condição); 

-- uso do count
COUNT 

SELECT COUNT(DISTINCT coluna1) 
FROM TABELA 

/* quantidade de produtos cadastrados na tabela produtos*/

SELECT *
FROM Production.Product;
 

SELECT COUNT(DISTINCT Name)
FROM Production.Product;  


/* quantos tamanhos de produtos tem cadastrado*/

SELECT COUNT(Size)
FROM Production.Product; 


SELECT COUNT(DISTINCT Size)
FROM Production.Product; 

 

 



 

 

 
 

 
 
