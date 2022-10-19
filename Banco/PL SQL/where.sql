SELECT * -- retorna tudo
FROM meus_pais; 


-- para retornar uma coluna desejada SELECT nome coluna
SELECT codigo, nome, sexo
FROM meus_pais; 

-- função DECODE transforma o código em uma descrição 
SELECT codigo, nome, DECODE(sexo, 'M', 'Masculino', 'F','Feminino')
FROM meus_pais;

SELECT DECODE (codigo, 1, 'Primeiro',
2, 'Segundo', 'nao sei'),
 nome, DECODE(sexo, 'M', 'Masculino', 'F','Feminino')
FROM meus_pais;

INSERT INTO meus_pais (
    codigo, nome, data_nascimento, sexo, renda) 
VALUES
(
    5, NULL, TO_DATE('02/11/1998','DD/MM/RRRR'), 'F', NULL
);

-- aula 4 