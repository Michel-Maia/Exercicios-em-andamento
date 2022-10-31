-- controle de acesso

 

-- CREATE USER 'nome usuario'@'local ip' IDENTIFIED BY 'senha';

-- ex CREATE USER 'usuario'@'200.200.200.200' IDENTIFIED BY 'senha123'; só acessa desse ip

-- ex CREATE USER 'usuario'@'%' IDENTIFIED BY 'senha123'; acessa de qq ip

 

 

-- comando de acesso geral

-- GRANT ALL ON banco.* TO 'usuario'@'localhost';

 

-- comando de acesso restrito

-- GRANT SELECT ON banco.* TO 'usuario'@'localhost';

 

-- SELECT User FROM 'usuario'@'localhost';

-- SHOW GRANTS FOR 'usuario'@'localhost'; - mostra as permissões do usuário

 

 

-- ACID

 

Atomicidade

Toda transação é realizada por completo

 

Consistência

Garante que as regras impostas pelo banco não possa ser quebrada

 

 

Isolamento

Os dados devem travados durante a execução

 

Durabilidade

Transação confirmada

 

-- Linguagem de transação de Dados

START TRANSACTION - Inicia a transação

COMMIT - Concretiza a transação

ROLLBACK - Anula a transação

 

 

 

---

MYSQL

 

SHOW ENGINES;

 

CREATE TABLE contas_bancarias (

id int unsigned not null auto_increment,

titular varchar(45) NOT NULL,

saldo double not null,

 

PRIMARY KEY(id)

) engine = InnoDB;   -- InnoDB da suporte a transação

 

INSERT INTO contas_bancarias(titular, saldo) VALUES ('user1', 1000);

INSERT INTO contas_bancarias(titular, saldo) VALUES ('user2', 2000);

 

SELECT * FROM contas_bancarias;

 

START TRANSACTION;

UPDATE contas_bancarias SET saldo = saldo - 100 WHERE id = 1;

UPDATE contas_bancarias SET saldo = saldo + 100 WHERE id = 2;

COMMIT;

 

 

 

 

STORED PROCEDURES

 

Bloco de código SQL armazenados no banco

- Vantagesn

              - Centralização

              - Segurança

              - Performance / velocidade

              - Suporte a transações

             

 

-- CRIAR

CREATE PROCEDURE Nome

 

-- invocar uma Procedure

CALL Nome

EXECUTE Nome

 

-- Excluindo uma Stored Procedure

DROP PROCEDURE Nome

 

 

TRIGGERS (GATILHOS)

Eventos que disparam códigos SQL

- Vantagens

              - As mesmas das Stored Procedures      

              - Execução de código SQL baseado em eventos

 

Tipos

              - BEFORE INSERT - execurtar um código antes que um registro seja inserido

              - BEFORE UPDATE - execurtar um código antes que um registro seja atualizado

              - BEFORE DELETE - execurtar um código antes que um registro seja excluido

 

              - AFTER INSERT - execurtar um código depois que um registro seja inserido

              - AFTER UPDATE - execurtar um código depois que um registro seja atualizado

              - AFTER DELETE - execurtar um código depois que um registro seja excluido

 

              - TEMPORAIS - precisar ser disparado de tmpos em tempos

 

 

-- CRIAR

CREATE TRIGGER Nome Tipo ON Tabela

 

-- excluindo

DROP TRIGGER Nome

 

 

 

 

-- verificar não rodou

CREATE PROCEDURE limpa_vendas()

BEGIN

    DELETE FROM qnt_vendas_feira_domingo WHERE cd_prod_feira_domingo = 10;

END;

 

CREATE TRIGGER gatilho_limpa_vendas

BEFORE INSERT

ON tft_vendas_feira_domingo

FOR EACH ROW

CALL limpa_vendas();