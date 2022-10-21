SELECT * FROM meus_pais;

SELECT * FROM filhos;

ALTER TABLE meus_pais ADD PRIMARY KEY (codigo);

CREATE TABLE filhos
(
    cod_pai NUMBER(5),
    cod_filho NUMBER(5),
    nome VARCHAR2(50),
    idade NUMBER,
    sexo CHAR(1),
    FOREIGN KEY (cod_pai)
    REFERENCES meus_pais (codigo)
);

INSERT INTO filhos
(
    cod_pai, cod_filho, nome, idade, sexo
) VALUES (
    2,
    1,
    'filho 1->1',
    10,
    'M'
);

-- select com duas ou mais tabelas usar JOIN

SELECT pai.nome, filhos.nome, filhos.idade, filhos.sexo
FROM meus_pais pai,
    filhos filhos
WHERE filhos.cod_pai = pai.codigo;

SELECT * FROM filhos;
















