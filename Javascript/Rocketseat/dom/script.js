// getElementByID() - pega os elementos pelo ID (element)

const element = document.getElementById('blog-title')
console.log(element)

// getElementByClassName() - pega os elementos pela classe (HTMLCollection)

const element1 = document.getElementsByClassName('');
console.log(element1)
  
// getElementByTagName() - pega os elementos pelo nome  (HTMLCollection)

const element2 = document.getElementsByTagName('meta');
console.log(element2)

// querySelector() - pega seletor CSS ex classe .one *mas só pega o 1 encontrado (element)

const element3 = document.querySelector('.one')
console.log(element3)

// querySelectorAll() - pega seletor CSS ex classe .one *pega todos que achar (Nodelist)

const element4 = document.querySelectorAll('.one')
console.log(element4)


// Manipulando o conteúdo 
// TextContent 

const element5 = document.querySelector('h3')

element5.textContent += " Olá Devs!"

console.log(element5.textContent)


// innerText

const element6 = document.querySelector('h4')

element6.innerText = "Olá Devs 1 !"

// innerHTML

const element7 = document.querySelector('h5')

element7.innerHTML = "Olá Devs 2 ! <small> !!! </small>"

// value

const element8 = document.querySelector('input')

element8.value = "Valor que eu quiser"

// atributos 

const header = document.querySelector('header')

header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID)

// Alterando estilo com style

const element9 = document.querySelector('.two')

element9.style.backgroundColor = '#ff4500'
