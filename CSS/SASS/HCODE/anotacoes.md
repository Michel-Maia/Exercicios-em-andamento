# SASS

## Instalação 

Terminal 

npm install -g sass


### Monitorando alterações automaticamente

- O parâmetro --watch

É possível monitorar um arquivo ou um diretório com a flag --watch. A flag irá avisar o Sass sempre que um arquivo monitorado for alterado, e então irá recompilar o arquivo Sass 

Para ativar o monitoramento de um arquivo sem ter de fazer individualmente, basta adicionar o comando --watch: 

sass --watch input.scss output.css 


- Monitorando um diretório 

É possível monitorar um arquivo ou um diretório completamente, e gerar um código correspondente em outro diretório,  basta utilizar o sinal de : (dois pontos)

sass --watch src/sass:dist/assets/css

Sass irá monitorar o diretório src/sass buscando por alterações, e irá compilar o CSS final para a pasta 
dist/assets/css


