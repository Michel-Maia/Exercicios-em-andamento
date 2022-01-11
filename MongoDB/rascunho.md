

banco de dados não relacional


--
escalabilidade

SQL
infla o hardware para que ele conporte

NoSQL
mais desempenho na aplicação
--

schema

BD relacional
maior consistencia
usa tabelas


NOSQL
sem mtas regras 

--

transações 

BD Relacional 
atomicidade
consistencia
isolamento
durabilidade


BD NoSQL
basically avalable
soft-state
eventually consistent


---

grafos 

estruturas matématicas 

nós compoem dados

detecção de fraudes

(Neo4j)
--


chave valor
pode ser simples ou complexo

alto desempenho
versatilidade
estrutura de dados na memoria

--



documento

autocontidos e auto descritivo

livre de esquemas podendo utilizar Json XML

--
MONGODB

grande volume de dados
dados não precisa estar estruturado

Quando não usar**
necessidade de relacionamentos/joins
propriedade ACID e transações importantes


--
docker composer

no terminal
docker container ps = mostra lista

mongodb cloud *ferramenta paga

**client robo 3T 
 robomongo.org


----

schema desing * trabalhar com  relacionamento embedding
documento autocontido 

pros * mais aconselhado, atualiza o registro em uma unica operação, consulta informações em uma unica query

contra * limite de 16MB por documento

referencia
pros* documentos pequenos, não duplica informações, usado quando os dados não são acessados em todas as consultas

contra* duas ou mais querie ou utilização do $lookup

bson * serialização codificada em binário de documentos semelhantes ao JSON
contém extensões que permitem a representação de tipos de dados que não fazem parte da especificação JSON, por exemplo BSON tem um tipo Date, ObjectID




































