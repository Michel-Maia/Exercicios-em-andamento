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


---
** Aplicações para internet com ReactJS

Inline - maneira mais básica de estilizar componentes

Classes - 

CSS in JS - 





























































