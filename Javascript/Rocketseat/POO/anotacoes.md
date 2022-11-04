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
class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'infatil'
        }
        else if (this.peso <= 65) {
               this.categoria = 'juvenil'
        }
        else {
               this.categoria = 'adulto'
        }
    }
}

class Lutador extends Alteta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        }
        else if (this.peso <= 60) {
               this.categoria = 'leve'
        }
          else if (this.peso <= 75) {
               this.categoria = 'meio-leve'
        }
        else {
               this.categoria = 'pesado'
        }
    }
}


````

### Abstração 
* Template ou Identidade de uma classe que será constrída no futuro

Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS 
A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração



````js
// definir
class Parafuso {
    constructor() {
         if (this.constructor === Parafuso)
         throw new Error('Classe abstrata não pode ser instânciada')
    }

    get tipo () {
        throw new Error ('Método "get tipo()" precisa ser implentado')
    }
}

class Fenda extends Parafuso {
     constructor() { super () }

    get tipo () {
        return 'fenda'
    }
}

class Philips extends Parafuso {
     constructor() { super () }

    get tipo () {
        return 'philips'
    }
}

class Allen extends Parafuso {}

// criar e usar
new Parafuso() // 'Classe abstrata não pode ser instânciada'
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) // método "get tipo()" precisa ser implementada

// nesse ex só existe parafuso se ele for de algum tipo específico como: Fenda, philips ou allen

````

