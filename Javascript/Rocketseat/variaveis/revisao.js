// variáveis e tipos de dados 

// declaração or declaration
//var name 

// atribuição de valores assigment
//var name = "João" 
//console.log(tipeoff name)

// que tipo de dado foi colocado na variável 

let age = 20
let isHuman = true

// agrupamento de declarações 
//let age, isHuman
//age = 36
//isHuman = true 

//console.log(name, age)

// escrita de texto + variáveis

// concatenando valores
console.log('o' + name + 'tem' + age + 'anos')


// interpolando valores template strings (usa a crase `` ) 
console.log(`o ${name} tem ${age} anos`)


// Objects 

const person = {
    name: 'Lilian',
    age: 25,
    isAdmin: true
}

console.log(person) 

console.log(person.name) // usar o . (ponto) pega um único valor da propriedade 

// array 

const animais = [
    'lion',
    'monkey',
    'cat'
]


// acessar valores dentro do array
console.log(animais[0])
console.log(animais.length) // total de elementos