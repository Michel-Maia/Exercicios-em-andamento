SELECT * -- retorna tudo
FROM meus_pais; 

-- where
SELECT *
FROM meus_pais
WHERE sexo = 'F';

-- para retornar uma coluna desejada SELECT nome coluna
SELECT codigo, nome, sexo
FROM meus_pais; 

-- função DECODE transforma o código em uma descrição 
SELECT codigo, nome, DECODE( sexo, 'M', 'Masculino', 'F','Feminino' )
FROM meus_pais;

SELECT DECODE ( codigo, 1, 'Primeiro',
2, 'Segundo', 'nao sei'),
 nome, DECODE( sexo, 'M', 'Masculino', 'F','Feminino' )
FROM meus_pais;

INSERT INTO meus_pais (
    codigo, nome, data_nascimento, sexo, renda) 
VALUES
(
    5, NULL, TO_DATE('02/11/1998','DD/MM/RRRR'), 'F', NULL
);

-- OR 

SELECT * 
FROM meus_pais 
WHERE ( renda > 205.00 OR renda IS NULL ) OR sexo = 'M';

-- AND 
SELECT * 
FROM meus_pais 
WHERE ( renda > 205.00 AND sexo = 'M' );


-- diferente
SELECT *
FROM meus_pais
WHERE sexo <>  'F';

-- in (estar contido)
SELECT *
FROM meus_pais
WHERE codigo IN ( 1,3,5 );

-- not in
SELECT *
FROM meus_pais
WHERE codigo NOT IN ( 1,3,5 );


-- max
SELECT MAX( renda )
FROM meus_pais;


-- min
SELECT MIN( renda )
FROM meus_pais;

-- lower
SELECT LOWER( nome )
FROM meus_pais;


-- upper 
SELECT UPPER( nome )
FROM meus_pais;

-- COUNT  contar
SELECT COUNT(*)
FROM meus_pais;


-- SUM soma
SELECT SUM( renda )
FROM meus_pais;
