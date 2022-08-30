// type conversion  type coersion

console.log('9' + 5)  // type coersion

console.log(Number('9') + 5) // type conversion - faço alteração de um dado para outro 



// Manipulando Strings e números


// Transformar String em Número e Número em String
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma  palavra e quantos dígitos tem um número 

let word = "paralelepipedo"
console.log(word.length)

let numero = 1234 // number não pega length , precisa transformar numero em string
console.log(String(numero).length)

// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula 
let number1 = 7754.321545
console.log(number1.toFixed(2).replace(".", ","))

// transforme letras minúsculas em maiúsculas. Faça o contrário também
let word1 = "Aprender a programar é massa"
console.log(word1.toUpperCase())

console.log(word1.toLowerCase())


// Manipulando Strings e Arrays 

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ 
let phrase = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join(" _ ")
console.log(phraseWithUnderscore) 