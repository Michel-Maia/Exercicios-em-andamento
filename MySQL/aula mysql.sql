CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES ('Michel', '1990 05 07')
INSERT INTO pessoas (nome, nascimento) VALUES ('Lilian', '2000 10 14')
INSERT INTO pessoas (nome, nascimento) VALUES ('Irmão do Jorel', '2008 02 15')
INSERT INTO pessoas (nome, nascimento) VALUES ('Lara', '1976 04 18')


UPDATE pessoas SET nome='Michel Maia' WHERE id='1'

DELETE FROM pessoas WHERE id='4'

SELECT FROM pessoas ORDER BY nome;
SELECT FROM pessoas ORDER BY nome DESC;