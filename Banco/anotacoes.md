# BANCO DE DADOS 

Desenvolvidos durante as aulas.

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

### Join 

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

