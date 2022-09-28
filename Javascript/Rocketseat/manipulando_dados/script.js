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
let phrase = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join(" _ ")
console.log(phraseWithUnderscore) 

// Verificar se o texto contém a palavra uma palavra especifica 

let phrase1 = "Lorem ipsum dolor sit amet lorem consectetur adipisicing elit" 
console.log(phrase1.includes("Lorem"))

// Criar Array com construtor 
let myArray1 = ['a', 'b', 'c', 'd', 'e']
console.log(myArray1)

let myArray2 = new Array('f', 'g', 'h', 'i', 'j')
console.log(myArray2)

let myArray3 = new Array(10) // exemplo array vazio 
console.log(myArray3)

// Contar elementos de um array 
console.log(["k", "l", "m", "n"].length)

// Transformar uma cadeia de caracteres em elementos de um array 

let word2 = "manipulação"
console.log(Array.from(word2))


// manipulando Arrays 

let techs  = ["html", "css", "js"]

// adicionar um item no fim
console.log(techs.push("react"))

// adicionar um item no começo
techs.unshift("sql")

// remover do fim 
techs.pop()

// remover do começo 
techs.shift()

// pegar somente alguns elementos do array   (slice significa cortar (1,2 onde começa e termina))
console.log(techs.slice(1,2))

// remover 1 ou mais itens em qualquer posição do array 
techs.splice(1,1)

// encontrar a posição de um elemento no array 
let index = techs.indexOf('html')

console.log(techs)