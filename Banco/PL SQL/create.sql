CREATE TABLE meus_pais 
(
    codigo NUMBER(5),
    nome VARCHAR2(100),
    data_nascimento DATE,
    renda NUMBER(10,2),
    sexo CHAR(1) 
);

-- NUMBER campo númerico , para decimal usa a virgula

INSERT INTO meus_pais  -- Inserir dados na tabela sem colocar o nome das colunas
VALUES 
(
    1,
    'Enzo Rafael',
    TO_DATE('01/10/2012', 'DD/MM/RRRR'), -- TO_DATE converte string para data
    100.23,
    'M'
); 


INSERT INTO meus_pais -- Inserir dados colocando o nome das colunas (evita erros)
( codigo, nome, data_nascimento, sexo, renda)
VALUES 
(
    1,
    'Enzo Rafael',
    TO_DATE('01/10/2012', 'DD/MM/RRRR'),
    100.23,
    'M'
); 



