console.log('a') 

// if .... else
let temperature = 36.5

if(temperature >= 37) {
    console.log('Febre')
} else {
    console.log('Saudável')
}

// duas condições
let temperature1 = 37

if(temperature1 >= 37.5) {
    console.log('Febre alta')
} else if(temperature1 < 37.5 && temperature1 >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// throw 
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

// try ... catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

// for
for(let i = 0; i < 10; i++) {
    console.log(i)
}

for(let i = 100; i > 0; i--) {
    if(i === 50) {
        break;
    }
    console.log(i)
}


// while 
let i = 0;
while(i < 10) {
    console.log(i)
    i++;
}

// for ... of

let livro = 'D'
let livros = ['A', 'B', 'c']

for(let livro of livros) {
    console.log(livro)
}

// for ... if
let person = {
    name: 'John',
    age: 30, 
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}

// exercícios 

/*
    Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * entre 50 - 59   - E
    * menor que 60    - F
    
*/
















