-- sysdate retorna data do sistema

SELECT sysdate FROM meus_pais;

-- vai retornar todas as linhas com data

SELECT sysdate FROM DUAL; 
-- retorna uma linha com data 

SELECT TO_CHAR(sysdate, 'dd/mm/rrrr hh:mi:ss PM') FROM DUAL; 
-- TO_CHAR transforma data em uma string 

SELECT TO_CHAR(sysdate, 'dd/mm/rrrr hh24:mi:ss PM') FROM DUAL; -- formato 24h

SELECT TO_CHAR(sysdate, 'mm'),
       TO_NUMBER(TO_CHAR(sysdate, 'mm'))
FROM DUAL; 

SELECT current_timestamp FROM DUAL; 
-- retorna data , hora e local 

SELECT TO_DATE('20/10/2022', 'DD/MM/RRRR') FROM DUAL; -- retorna formato de data 

SELECT NVL( nome, 'desconhecido') FROM meus_pais; -- troca o valor NULL por alguma coisa ex. na coluna nome trocou null por desconhecido

SELECT MOD(3,2), ROUND(3.245423654, 2), COS(1) FROM DUAL;

SELECT LPAD('Teste' , 10, '.') FROM DUAL;
-- LPAD preencha a partir da esquerda

SELECT RPAD('Teste' , 10, '.') FROM DUAL;
-- RPAD preencha a partir da direita

SELECT LENGTH('Testando') FROM DUAL;
-- Tamanho da string

SELECT REPLACE('Teste', 's', '-tirei o s-') FROM DUAL;
-- Substituir 

SELECT SUBSTR('Testando', 2 , 3) FROM DUAL; -- retorna a string a partir do número escolhido e a quantidade escolhida exemplo acima vai retornar  est 

SELECT RTRIM('     Teste    '), -- direita
       LTRIM('     Teste    '), -- esquerda
        TRIM('     Teste    ') --todos
FROM DUAL; -- retira os espaços 

-- || junta as strings
SELECT 'Teste' || 'Teste2' FROM DUAL;








