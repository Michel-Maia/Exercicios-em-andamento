/*

    Function() constructor

    * expressão  new
    * criar um novo objeto
    * this keyword
    
*/

function Person(name) {
    this.name = name     // this referencia o "João" que esta la fora
    this.walk = function () {
        return this.name + "está andando"
    }
}

const joao = new Person("João") // quando uso new seguido da função essa função se torna construtora e retorna um objeto 
const maria = new Person("Maria") 
console.log(joao.walk())
console.log(maria.walk())