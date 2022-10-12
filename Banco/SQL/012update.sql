/*
UPDATE atualiza algum dados 

*/

UPDATE jobs -- nome tabela
SET job_title = ‘Gerente de TI’  -- set é o comando que define qual dado será atualizado 
WHERE job_id = ‘IT_MGR’;  --usado o WHERE para selecionar um único local que será atualizado, caso não coloque WHERE todos serão atualizados