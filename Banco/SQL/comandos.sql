-- cria um banco de dados

CREATE DATABASE nomebanco; 

-- seleção do banco de dados 
USE nomebanco;

-- criação de tabelas no banco de dados selecionado

CREATE TABLE nometabela (
    ID_Venda INT,
    Curso VARCHAR(100),
    Aluno VARCHAR(100),
    Estado VARCHAR(100),
    Valor DECIMAL (10, 2)
);

-- inserir dados
INSERT INTO Vendas(ID_Venda, Curso, Aluno, Estado, Valor)
VALUES
(1, 'SQL', 'Lilian', 'SP', 100),
(2, 'JS', 'Angelica', 'SP', 200),
(3, 'SQL', 'Dom', 'SP', 100),
(4, 'Python', 'Rafaela', 'SP', 50),
(5, 'Power BI', 'Henry', 'PB', 100),
(6, 'Power BI', 'Jessica', 'RJ', 100),
(7, 'SQL', 'Enzo', 'SP', 100),
(8, 'Python', 'Maria', 'MG', 50),
(9, 'JS', 'Rodolfo', 'MG', 200),
(10, 'JS', 'César', 'AC', 200);


-- selecionar dados 
SELECT * FROM Vendas;

-- ordenar dados
SELECT * FROM Vendas
ORDER BY Aluno;


-- ordenar dados
SELECT * FROM Vendas
WHERE Estado = 'SP';

-- atualizar dados
UPDATE Vendas
SET Valor = 150
WHERE Curso = 'SQL';


-- deletar linhas
DELETE FROM Vendas
WHERE ID_Venda = 10;

-- excluir todos os dados de uma tabela 
TRUNCATE TABLE Vendas; 



-- https://www.youtube.com/watch?v=ucYr2vdZ5Qc