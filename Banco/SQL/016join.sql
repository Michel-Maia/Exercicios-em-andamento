/* primary key identifica a tabela


existe 3 tipos gerais de JOINS:
INNER JOIN , OUTER JOIN E SELF-JOIN 
*/

SELECT C.ClienteId, C.Nome, E.Rua, E.Cidade
FROM Cliente C
INNER JOIN Endereco E ON E.EnderecoID = C.EnderecoID

SELECT TOP 10 *
FROM Person.PhoneNumberType

SELECT TOP 10 * 
FROM Person.PersonPhone

SELECT pp.BusinessEntityId, pt.Name, pt.PhoneNumberTypeId, pp.PhoneNumber
FROM person.PersonPhone PP 
INNER JOIN Person.PhoneNumberType PT ON PT.PhoneNumberTypeId = pp.PhoneNumberTypeId

