# React

React é uma biblioteca não um framework,

criação da interface para o usuário, 

react é uma linguagem declarativa

está preocupado apenas é oq é exibido na interfce

pode ser usado em qq lugar

baseado em componentes 

pode ser usado em qq lugar

________

# React create app

React script 

JSX - nem é uma string nem HTML
é uma linguagem de marcação

React não separa as tecnologias colocando marcação
em arquivos separados, e sim separa conceitos e mantém o
código pouco acoplado chamando-os de componentes

não é obrigatório a utilização do JSX

JSX é sintax suggar para react

browser não interpreta o JSX para isso é necessário o
transpilador

----

# Webpack 

É um module nundler (um empacotador de módulos para aplicações JS) 

Gerar bundler que será utilizado no HTML em ES5

Principais conceitos: 

Entry - Utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências.

Output - É para determinar quais são os bundlers que o webpack irá emitir 

Loaders - É para permitir que o webpack gerencie arquivos não são Javascript

Plugins - podem ser utilizados para otimização de pacotes, minificação, injeção de script e muito mais


# configuração 

Mode - Utilizados para abordagem de configuração zero. É possível configurar módulos como production, development ou none.

production, trás otimizações internas

development, É executado com três plugins: UglifyJsPlugin ModuleConcatenationPlugin e NoEmitOnErrorsPlugin


criando arquivo**

npm i -D webpack webpack-cli

"build": "webpack --mode production"

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

--

# Renderização Condicional

"Em react, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação"


# Manipulando Eventos

Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos do DOM. Existem algumas diferenças sintáticas: 

Eventos em React são nomeados usando camelCase ao invés de letras minúsculas.

Com o JSX da para passar uma função como manipulador de eventos ao invés de um texto.


# Aplicações para internet com ReactJS

Inline - maneira mais básica de estilizar componentes

Classes - usa className para manter a compatibilidade (contra mais difícil de manter, pouca flexibilidade, conflito com nome)

CSS in JS - 
comando npm install --save style-components

# Stateful 
Usa estados, possui gerenciamento de estados, contruído usando classes

ciclo de vida - initilization / mounting / updation / unmounting



# Stateless
Não usa estados

Não possui gerenciamento de estados no componente.

Construídos usando funções em JS 


# Formulários 

Mantém um estado interno

--
Componente controlado
Tanto select, input ou textarea aceitam um atributo value

pode nudar esse valor usando o atributo onChange

*componente não controlado
a tag é read-only

## Biblioteca
Formik
Redux-forms


# Flux 
Criação do Facebook 
padrão de projeto para tráfego de dados de maneira unidirecional 

Action - é como um telégrafo: ele formata a msg a ser enviada

Dispatcher - é como um telefonista; ele sabe todos os callbacks para diferentes Stores

Store - é como se fosse um gerente super controlador; ele guarda a informação e todas as alterações têm que ser feitas por ele mesmo, mais ninguém. 

View - é como um gerente intermediário (middleware) que recebe as notificações da store e passa os dados para as visões abaixo dela. 



# Redux 
Redux é mais popular, foi criado em 2015 , ele implementa o flux


# instalando o Redux

npm install react-redux
npm install --save-dev redux-devtools














































































