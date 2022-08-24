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
//console.log('o' + name + 'tem' + age + 'anos')


// interpolando valores template strings (usa a crase `` ) 
//console.log(`o ${name} tem ${age} anos`)


// Objects 
/*
const person = {
    name: 'Lilian',
    age: 25,
    isAdmin: true
}

console.log(person) 

console.log(person.name) // usar o . (ponto) pega um único valor da propriedade 
*/
// array 

const animais = [
    'lion',
    'monkey',
    'cat'
]


// acessar valores dentro do array
console.log(animais[0])
console.log(animais.length) // total de elementos


// exercícios 
// declare uma variável de nome weight 
var weight

// que tipo de dado é a variável ?
console.log(typeof weight) // undefined

/* declare uma variável e atribua valores para cada um dos dados: 
    * name: string
    * age: number(integer)
    * stars: number(float)
    * isSubscribed: boolean 




let name = "Maria"
let age =  25
let stars = 26.7
let isSubscribed = false

*/


/* mostre no console a seguinte msg 

    <name> de idade <age> pesa <weight> kg 

*/
/*
let student = {
    name: "Maria",
    age: 25,
    stars: 26.7,
    isSubscribed: false,
    weight: 70,
};    


console.log (`${student.name} de idade ${student.age} pesa ${student.weight} kg`) */


/* Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio */ 

let student = {
    name: "Maria",
    age: 25,
    stars: 26.7,
    isSubscribed: false,
    weight: 70,
};    

let students = []

// reatribui o valor
students = [
    student
]

console.log(students[0])