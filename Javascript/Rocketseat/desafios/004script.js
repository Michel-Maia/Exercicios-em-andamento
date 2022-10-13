// desafios

/* Buscando e contando dados em Arrays 

4 - Baseado no array de lIvros por categorias abaixo, faça os seguintes desafios
    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar livros do autor 
    - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

*/

const booksByCategory = [
    {
        category: "Estudo",
        books: [ 
            {
                title: "Clean Code", 
                author: "Robert C. Martin",
            },

            {
                title: "Arquitetura limpa",
                author: "Robert C. Martin",
            },

            {
                title: "O codificador limpo",
                author: "Robert C. Martin",
            },
        ],
    },
    {
        category: "Javascript",
        books: [
            {
                title: "O Guia Definitivo",
                author: "David Flanagan",
            },

            {
                title: "Javascript: Básico ao Avançado",
                author: "Kelvin Baumhardt Biffi",
            },

            {
                title: "Lógica de Programação e Algoritmos",
                author: "Edécio Fernando Iepsen",
            },

        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();


function booksOfRobert() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Robert C. Martin') {
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)
}

booksOfRobert();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Robert C. Martin');
