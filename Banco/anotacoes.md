# BANCO DE DADOS 

Desenvolvidos durante as aulas.

- SQL (Structured Query Language) Linguagem Estruturada de Consulta
    - DDL (Data Definition Language) Linguagem de Definição de dados.
      tabelas , visões e estruturas. 
      CREATE Cria uma estrutura
      ALTER Altera
      DROP Exclui  

    - DML (Data Manipulation Language) Linguagem de Manipulação de dados
     gerenciamento dos dados
     INSERT Insere dados
     UPDATE Atualiza dados
     DELETE exclui

    - DQL (Data Query Language) Linguagem de consulta de dados
        consulta
        SELECT Retorna dados, ordena, agrupamento e funções.

    - DCL (Data Control Language) Linguagem de controle de dados
      permite ou nega acesso
      GRANT Habilita acesso a dados e operações
      REVOKE Revoga acesso a dados e operações

    - DTL (Data Transaction Language) Linguagem de transação de dados
      START TRANSACTION Inicia a transação
      COMMIT Concretiza a transação 
      ROLLBACK Anula a transação



BASE DE DADOS - Qualquer lugar que armazena dados, todo e qualquer lugar ex. excel, bloco de notas
BANCO DE DADOS - Manipular os dados

SQL – Linguagem de consulta estruturada 

Banco de dados relacional

A linguagem SQL é um padrão adotado pela maioria dos bancos de dados. Isto decorre da sua simplicidade e facilidade de uso.

Criar uma base de dados (criar um banco de dados)
create database nome_do_banco


SGBD – Sistema de gerenciamento de banco de dados 
Permite ao desenvolvedor trabalhar com diferentes tabelas de um banco de dados através de uma interface. Essa interface seria basicamente um programa que nos permite fazer a leitura de tabelas de um banco de dados e utilizar o SQL para manipular esses dados, tudo de uma maneira bem visual 

Tipos de campo
Text – abc..
Number - 123...
Datatime – 01-10-2022-09-30-22 (entende como data e hora)
Primary key –  (identificador único)

Regras para escrever nome de tabelas e de campos
1 – Deve começar por uma letra do alfabeto 
2 - Os caracteres seguintes não são permitidos () + - / * “ ; = & \ > < ^’ {} % 
3 – Não pode conter espaços 
4 – Não pode conter acentuação 

Query.sql 
Busca em cima de dados (qnt específica de linhas) 
Comandos SQL são sempre em letra maiúscula 
SELECT
--- SQL Server, Postgres, Oracle, mySQL

SELECT coluna1, coluna2 (uma coluna, mais ou todas) 
FROM tabela

SELECT * (retorna todas)
FROM tabela


- CHAR - tamanho definido ex se colocar CHAR 30 (string) e colocar somente um campo A os demais 29 espaços será preenchido com espaços em branco 
- VARCHAR - tamanho variavel, ou seja o campo só vai preencher o que for digitado
- BLOB - permite o armazeenamento de informações binárias, arquivos e imagens.
- TEXT - permite o armazenamento de grandes informações de string 
- REDES - Permite o armazenamento de endereço IP,MAC-ADDRESS e outros
- Monetários - Permite o armazenamento de valores monetários com formatação 
- Geométricos - Permite o armazenamento de informações de formas geométricas 
- NULL / Not NULL - Permite ou não valores nulos 
- Unsigned / Signed - Permite ou não números negativos
- Auto-increment - Sequências, contadores 
- Zerofill - Preenche o valor numérico completando com zeros a esquerda


* Espaço em disco, Quanto mmenor o tipo de dado, menos espaço ele ocupará
* Prcessamento e busca, quanto menor o tipo de dado, mais rápido é o processamento

* Maus usos dos tipos de dados
    - Armazenar dados numéricos em colunas string
    - Armazenar dados númericos em campos maiores que o necessário
    - Criar campos de string maiores do que o necessário

* Linguagem de Definição de Dados
  - Create, cria uma estrutura
  - Alter, Altera uma estrutura
  - Drop, Exclui uma estrutura


Criar um banco de dados
- CREATE DATABASE nomebanco

Alterar
- ALTER DATABASE nomebanco

Excluir
- DROP DATABASE nomebanco

* Sequência
- CREATE SEQUENCE Nome
- ALTER SEQUENCE Nome Propriedade
- DROP SEQUENCE Nome


* Linguagem de Definição de Dados
  - Create, cria uma estrutura












### 

![preview](./.github/preview.png) 

- Inner Join, retorna apenas os resultados que correspondem(existem) tanto na tabela A como tabela B

- Full Outer Join, retorna um conjunto de todos registros correspondentes da Tabela A e Tabela B quando são iguais. E além disso se não houver valores correspondentes, ele simplismente irá preencher esse lado como "null"

- Left Outer Join, retorna um conjunto de todos os registros da Tabela A, e além disso, os registros correspondentes(quando disponíveis) na Tabela B. Senão houver registros correspondentes ele simplesmente vai preencher com "null"



## 💻 Tecnologias

- SQL
- PL SQL


## Referências

https://www.hackerrank.com/

[DevAprender-youtube] - https://www.youtube.com/watch?v=G7bMwefn8RQ&t=3421s

[HashtagProgramação-youtube] - https://www.youtube.com/watch?v=9dKZsDeaoPY&t=4s

[techonthenet] - https://www.techonthenet.com/oracle/functions/sysdate.php

[SelectTec-youtube] - https://www.youtube.com/watch?v=G_OASqe2uvA

[ZorddieBr-youtube] - https://www.youtube.com/watch?v=-LMuBCopYx8&list=PLJZRlbWeQvwI8nRzviH5ckXwYudrw2T56&index=3

[OProgramadorW-youtube] - https://www.youtube.com/watch?v=7OweW8qej_8&list=PLYp15S-UDtuNxSlRnFTdCjCl3LLAawbSH



