# ORIENTAÇÃO A OBJETOS


.NET 

.NET framework 4.8 C# 7.3
WCF e ASP.NET não será mais evoluido

.NET Core 3.0 com C# 8.0

.NET 5 


framework - conjunto de códigos prontos

--
namespace - separar as classes

tudo que estiver dentro da classe é membro
--
Interface é como se fosse um molde para várias classes

uma classe que implementa uma interface deve implementar
todos os membros
--

enum - conjunto de constantes nomeadas que começam do 0 e 
aumentam de 1 em 1
-----

F9 debugging
--


é uma infraestrutura para desenvolvimento de softwatr
criada pela microsoft

c# 
orientação a objetos

 stackoverflow
 
POO - programação orientada a objetos
ex carro objeto atributos cor,modelo,marca

POO 
Abstração
Encapsulamento
Herança
Polimorfismo


PE - proramação estruturada
sequencia
seleçõe
repetições


classes -estrutura de dados/esboço do objeto
UML - linguagem universal de modelagem


string conjunto de caracteres

public class pode ser acessado e qq local do site

objetos são instâncias de uma classe
instaciamento (criação a partir) de uma classe



-------------------
visibilidade (encapsulamento de atributos)
representada pelo simbolo

pública +
privada -
protegida #

-------------
TIPOS

tipo valor - não pode conter valor nulo (sbyte,short,int,byte)
número de ponto flutuante ão bastante convencionais
double, float, decimal
booleano = bool (false,true)


tipo referencia - duas variais pode pertencer ao mesmo objeto
interface, delegate

tipo ponteiro - apontador é um tipo de dado 


-----
métodos - determinam o comportamento do objetos de uma classe
 ex objeto carro método andar

getters - solicita o acesso a informações

setters - modificadores, recebe um valor e repassa

construct - qndo vai iniciar a função

propriedades - forma mais inteligente de fazer implementações

"get" e "set"

delegate - delega uma variavel
------------------

var = permite variação
const = não altera o valor
string =texto
if = se
else if = senão
! = instrução negativa 
for = para 
foreach = para cada
return = retorna

readLine = le 
writeLine = escreve

InstrucoesTryCatchFinallyThrow=
trabalhar com exceções
using = para importar referencias 

------------------------------------

array - são tios de referencia e a declaração de uma variavel 
simplesmente reserva espaço

ao criar um array é especificado o tamanho
começa com 0

pode ser uni e multidimensional

---------------


dotnet --help

 --info = trás todas as versões que foram instaladas

comandos
 add = add um pacote ou referencia
build = construção, compila as dls
new = cria arquivo
nuget = gerenciador de pacotes
publish = gera ll sobe site
restore = restaura pacotes
run = roda a aplicação
test = roda teste da aplicação

tool = instala e gerencia ferramentas
--------------
clear
cls =limpa a tela


dotnet new

console


todo .net vai gerar um executavel


---------------------------------------


C# é uma linguagem elegante, orientada a objetos

compilador do C# é o Roslyn

----------------------------------

SDK - software developmentl kit

C# linguagem

.Net core 3.1

microsoft 

5.0 mais completo


IDE
Integrated development environment 
Ambiente de desenvolvimento

sintase hill ligth cor difrente
auto complete
organização de códigos


comunity


visual studio



--------------------

SOLID 
conjunto de design


*clean code (código limpo)

código reflete a regra do negocio
meaningful and intention revealing names (nome que da sentido)
funções devem fazer apenas uma coisa


_lei de conoi
qualidade do software reflete a
 qualidade da empresa_


principio de desing = guia de como chegar no objeto


SOLID = era um livro 
Postulados e projeto e padrões de projeto 



*oq não é princio de design
_não é bala de prata
_o perigo de usar cegamente


principio de responsabilidade unica

aberta pra externsão mas não pra modificação

substituição de liskov (herança)
capacidade de herdar o comportamento do pai
ex robo café

segregação interface



------------------



strucs - são estruturas do tipo valor não aceita herança

interface - não fornece implementos dos membros q define
apenas sua assinatura, podem herdar 

enums - enumeradores ou lista 

------------------------



14 hábitos de dev altamente eficientes

zeno rocha

----------------




CRUD - cadastro básico
create / criar
read / ler
update / atualizar
delete / excluir



classe abstratas - não pode ser instanciada
pode conter métodos abstratos

interface não possui atributos

-------


pode ser usado em diversas plataformas
desktop / web / cloud / mobile / gaming / ai


framework - so roda no windows

surgiu o .net core 
roda linux
mac
windows


.net sartadar
biblioteca


framework - cx de ferramentas, pronta pra uso ex bootstrap

runtime - transforma oq escrevemos em 0110101 

cli - cmd 
interface linha  de comando
processa os comandos que serão enviados para um 
programa de computador na forma de linhas de texto



dotnet new - no cmd
cria um novo arquivo

-o cria um pasta

cd nome pasta
entra na pasta criada

build - compila o arquivo (tranforma o arquivo em liguaguem de computador)

restore - resgata alguns itens para que o código funcione


------

POO 

paradigma de programação ou seja, corresponde a uma técnica
de programação para um fim específico

aproxima do mundo real




4 pilares

*abstração
*encapsulamento
* herança
*polimorfismo



atrubutos principais

classe e objeto

---
ex 
classe é a planta

objeto casa
---

tipos de paradigmas 

paradigma é diferente de linguaguem de programação

paradigma nada mais é do que um modelo de técnicas, estruturas 
e formas de solucionar um problema


tipos de paradigmas
programação orientada a objetos
programação estruturada
programação imperativa
programação procedural
programação orientada a eventos
programação lógica


---
*abstração
pega algo do mundo real e coloca apenas os atributos mais 
importantes 



*encapsulamento
protege uma classe e defini limite para alteração


* herança
herda da classe pai
agrupa objetos do mesmo tipo


*polimorfismo
significa muitas formas

pode sobrescrever métodos das classes filhas para q se comportem de 
maneira diferente e ter sua própria implementação
------------

classe abstrata
tem como objetivo ser exclusivamente modelo para ser herdado
portanto não pode ser instanciado

--

classe selada
objetivo de impedir q outras classes façam herança dela
não pode ter filhos

--

classe object
mãe de todas as classes

---

interface é um contrato que pode ser implementado por uma classe
é como se fosse uma classe abstrata


--------------------------------------
cria a pasta
dentro do caminho cmd

cria uma solucion

dotnet new sln --name Exemplonome

cria pasta
mkdir exemplo

acessa o diretorio 
cd 


entrando na pasta da pra criar
cd nome da pasta

cria o projeto  na pasta
dotnet new console

para voltar um nivel
cd ..


dotnet sln add exemplo/exemplo.csproj

abre o vscode 
code . 


---------

se criar uma pasta 
abre o terminal 

dotnet dotnet new globaljson (arquivo raiz qndo tem várias versões do dot.net)
dotnet new console (cria aquele program)


----

construtores **

método especial que contém o mesmo nome do seu tipo classe e tem objetivo de definir valores padrão

toda classe tem um construtor
--

GET SET
maneira de atribuir um valor de maneira controlada


GEt - obtem valor 

SET - atribuir valor para a propriedade

-----


readonly
somente leitura, bloqueia campo contra alterações


constante
é um valor q pode ser atribuido uma unica vez
não pode ser modificado


-- 
delegate
trabalha com referencia
é uma maneira de passar parametro por referencia
qq metodo q contenha a mesma assinatura

---

eventos 

é um mecanismo de comunicação entre objetos
evento trabalha com um delegate

--


microsserviços com .NET

monolitos
dificies de colocar
rápido e fácil para iniciar
infraestrutura simples
debug fascinante

problemas com merge
bug e efeitos colaterais
bx escalabilidade



escalabilidade
se tem muitos acessos precisa pensar na escalaabilidade


horizontal 
 usa um load balancer para dividir o acesso


horizontal com microsserviços
dividir em varias maquinas
rotas


*2001 manifesto ágil 

lin - divisão em 3 grandes pilares
desenvol
aprendizado


ecossistema de microserviços

para cada microserviço eu tenho um banco de dados




micro serviço dependem apenas um do outro via API públicas

micro serviço podem e devem ser poliglotas em seus stacks

(várias linguagens juntas ex .net Java node)



micro serviço
encapsula estado e comportamento 

estado - dados
comportamento - regras de negocio 

= business capability



micro serviço possuem deploy independente , deploy de um unico container

microserviço devem ser tratados isolado à falhas 
para agregar valor ao seu negocio


--

como dividir o monolito em microsserviços


camada anticorruption




-------------


Arrays 

é uma estrutura de dados que armazena valores do mesmo tipo com um tamanho fixo, após declarado não é possivel aumentar ou diminuor o array


array sempre começa com posição 0 

array multidimensional 
pode ter linha e coluna 

a classe array é uma classe do c# q oferece diversos métodos para trabalhar de maneira mais fácil

--
coleções genérica

c# existem classes de coleções que agrupam valores, e essas classes são padronizadas para as operações
mais comuns como

ordenação
obter valor po indice
obter valor com tamanhos dinâmicos



coleções é mtu semelhante ao array


coleção especifica
impementam regras para sua ordem de acesso emanipulação de seus elementos

Queue (fila) obedece a ordem FIFO *first in first out
Stack (pilha) obedece a ordem LIFO *last in first out



dicionário é uma coleção de chave e valor, permitindo que recupere rapidamente seus itens baseado em sua chave

dicionário armazena a sua chave em hash


LINQ
operações LINQ

language integrated query 

é uma maneira de voce utilizar uma sintaxe de consulta padronizada para coleççoes

____

desing patterns 

praticas e soluções já testadas

não é um padrão pronto para ser aplicado é uma descrição/template de como resolver o seu problema

creational - construçaão do obj 
structual - interação entre obj
behavioral - comportamental






































































































