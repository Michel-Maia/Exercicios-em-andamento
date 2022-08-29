// function hoisting

sayMyName() // primeiro esta executando a função e depois está registrando a função 

function sayMyName(){
    console.log('Testando')
}

// elevação 


sayMyName() 

// no uso de const o hoisting não funciona
const sayMyName = function(){ 
    console.log('Testando')
}

// se fizer uma função em forma de expressão ela não vai ser elevada