# POO
Um paradigma de desenvolvimento
Maneira de resolver um problema
Pensar em uma coisa como um objeto

### Objetos
ex Uma caneta é um objeto
Todo objeto possui propriedade(ex tamanho, peso) e funcionalidades (ex ligar)
Estado(ex posição) e comportamentos(ex mouse clicar)
Atributos e Métodos

### Classes
Como se fosse um molde, modelo. (Instância)

````js
class Pessoa {
    constructor() {
        this.id= ~~(Math.random() * 10000)
    }
}

// criar objeto
const pessoa = new Pessoa('Teste')
````

### Encapsulamento
ex Dirigir um carro não precisa conhecer o motor
Agrupamento de funções e variáveis 

````js

// Estrutural 

let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()

// orientado a objetos

class Poligono {
    constructor(altura,largura) {
        this.altura = altura
        this.largura = larguna
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }

}

// criar objeto

let poligino = new Poligono(50,60)
console.log(poligono.#calcularArea())

````

### Herança
Objetos podem herdar ou estender características do objeto 
Todo objeto já tem herança por padrão
Fácil reutilizar o código

````js

class Veiculo {
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super() // puxar atributos e métodos do pai
        this.rodas = 2
    }
}

````

### Polimorfismo 
Quando um objeto estende de outro(herança) talvez haja a necessidade de reescrever uma ou mais características(atributos e métodos) nesse novo objeto.

Recriamos então um método (ou mais) da classe herdada.

Polimorfismo significa muitas formas

ex classe ave
classe pinguim - herda atributos e métodos da classe ave
precisa reescrever o método voar

````js
````