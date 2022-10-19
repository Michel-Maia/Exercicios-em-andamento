-- aula modelagem de dados 

-- usado exemplos com brModelo


CREATE TABLE pessoa (
    idPessoa NUMERIC PRIMARY KEY,
    nome CHAR,
    RG CHAR,
    foto CHAR,
    dtNasc DATE,
    fk_familia_idFamilia NUMERIC
);

CREATE TABLE familia (
    idFamilia NUMERIC PRIMARY KEY,
    sobrenome CHAR,
    endereço CHAR,
    fk_classificacao_idClassif NUMERIC
);

CREATE TABLE classificacao (
    idClassif NUMERIC PRIMARY KEY,
    classificacao CHAR
);

ALTER TABLE pessoa ADD CONSTRAINT FK_pessoa_2
    FOREIGN KEY (fk_familia_idFamilia)
    REFERENCES familia (idFamilia)
    ON DELETE RESTRICT;

 
ALTER TABLE familia ADD CONSTRAINT FK_familia_2
    FOREIGN KEY (fk_classificacao_idClassif)
    REFERENCES classificacao (idClassif)
    ON DELETE CASCADE;

 