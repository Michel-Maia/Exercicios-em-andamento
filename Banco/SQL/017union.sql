/*
Union

operador union combina dois ou mais resultados de um select em um resultado apenas.

*/

SELECT coluna1, coluna2
FROM tabela1
UNION  -- UNION ALL coloca os duplicados 
SELECT coluna1, coluna2
FROM tabela2

