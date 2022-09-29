// exemplos

// operador binário
let number = 1

console.log(number + 1)

// operador unário 
let number1 = 2

console.log(++number1)

// operador ternário 
console.log(true ? 'olá' : 'mundo')

// new
let nome = new String('Enzo')
let idade = new Number(20)
console.log(nome, idade)

// typeof - saber qual tipo de dado
console.log(typeof "abacaxi")

// delete 
const person = {
    nome1: 'Kiwi',
    age: 25,
}

delete person.age

console.log(person)

// Multiplicação
console.log(3*5)

console.log(5.2*9)

// Divisão
console.log(12/6)

// Soma
console.log(5+22)

// Subtração 
console.log(15-8)

// Resto da divisão % 
let remainder
remainder = 11 % 9

console.log(remainder)

// Incremento ++
let increment = 0
increment++
increment++
increment++
console.log(increment)

// Decremento --
let decrement = 0
decrement--
decrement--
console.log(decrement)

// Exponencial **
console.log(3**2)

// agrupamento ( )

let total = (2 + 3) * 5
console.log(total)

let total1 = ("Blá blá" + " ti ti ti")
console.log(total1)

// operadores de comparação 

let one = 1
let two = 2 

// == igual a 
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// estritamente igual a 
console.log( one === "1")
console.log( one === 1)

// estritamente diferente de 
console.log(two !== "2")
console.log(two !== 2)

// maior que >
console.log(one > two)

// maior igual a >=
console.log(one >= 1)
console.log(two >= 1)

// menor que <
console.log(one < two)

// menor igual a <=
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)


// operadores de atribuição
let x 
console.log(x)

// assignment 
x = 1
console.log(x) 

// addition assignment 
// x = x + 2 
x += 2
console.log(x) 

// subtraction assignment 
x -= 1
console.log(x) 

// multiplication assignment 
x *= 2
console.log(x) 

// division assignment 
x /= 1
console.log(x) 

// remainder 
x %= 6
console.log(x) 

// exponetiation 
x **= 2
console.log(x) 

// operadores lógicos 

let pao = true 
let cafe = true 

// e AND && 
// os dois valores tem que ser verdadeiro pra ter resposta verdeira se um for falso a resposta será false
console.log(pao && cafe)

// ou OR ||
// qualquer resposta que for verdadeira será verdadeira , só dará false se os dois forem falsos
console.log(pao || cafe)

// negação NOT !
console.log(!cafe)