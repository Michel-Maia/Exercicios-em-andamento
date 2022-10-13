-- Rocketseat 

SELECT * FROM aluno -- * tudo

SELECT nome, responsavel FROM aluno -- coluna, coluna FROM tabela

SELECT materia, nome FROM professor -- coluna é colocada de acordo a ordem que eu colocar 

SELECT * FROM aluno WHERE matricula = 1 -- condição 

SELECT * FROM aluno WHERE nome LIKE "j%" -- parecido , contendo , igual 

SELECT * FROM aluno WHERE nome LIKE "lilian" -- like é o mesmo que = igual (no uso de texto)

SELECT * FROM aluno WHERE cpf = 1354614614


-- Operadores relacionais
SELECT * FROM aluno WHERE matricula > 1 -- maior

SELECT * FROM aluno WHERE matricula >= 1 -- maior ou igual

SELECT * FROM aluno WHERE matricula < 3 -- menor

SELECT * FROM aluno WHERE matricula <= 3 -- menor ou igual

SELECT * FROM aluno WHERE matricula != 3 -- diferente

SELECT * FROM aluno WHERE matricula <> 1 -- não igual a


-- Operadores matemáticos 
SELECT * FROM aluno WHERE matricula = 1 + 1 -- adição (faz a operação 1+1 e busca o resultado)

SELECT * FROM aluno WHERE matricula = 3 - 1 -- subtração (faz a operação 3+1 e busca o resultado)

SELECT * FROM aluno WHERE matricula = 2 * 2 -- multiplicação (faz a operação 2*2 e busca o resultado)

SELECT * FROM aluno WHERE matricula = 4 / 2 -- divisão (faz a operação 4/2 e busca o resultado)

SELECT * FROM aluno WHERE matricula =  4 % 2 -- módulo, resto da divisão (faz a operação 4%2 e busca o resultado)


-- Operador lógico
SELECT * FROM aluno WHERE nome LIKE 'L%' AND matricula > 2 -- AND e

SELECT * FROM aluno WHERE nome LIKE 'L%' OR matricula > 1 -- OR ou 

SELECT * FROM funcionarios 
WHERE id_funcionarios BETWEEN 4 AND 7 -- BETWEEN entre

SELECT * FROM funcionarios 
WHERE id_funcionarios NOT BETWEEN 4 AND 7 -- NOT BETWEEN (Not - não)

SELECT * FROM funcionarios 
WHERE id_departamento IN (1,2,4) -- IN 

SELECT * FROM funcionarios 
WHERE id_departamento NOT IN (1,2,4) -- NOT IN 

SELECT * FROM funcionarios 
WHERE id_departamento IS NULL  -- IS NULL (null - vazio)

SELECT * FROM funcionarios 
WHERE id_departamento IS NOT NULL  -- IS NOT NULL 

-- INSERT INTO  *inserir dados
INSERT INTO aluno(nome, cpf, responsavel) VALUES ("Lilian", 2312452177, "Angelica") -- insert into não retorna dados 

-- UPDATE *alterar algum dado existente 
UPDATE aluno SET nome="Enzo" , responsavel="Enzo Rafael" WHERE matricula = 2 -- set é usado para passar as novas informações *não retorna dados só atualiza

-- DELETE * apaga uma informação , mas não apaga um único campo e sim o registro , precisa usar o primary key
DELETE FROM aluno WHERE matricula = 3 -- precisa ser passado com WHERE 


