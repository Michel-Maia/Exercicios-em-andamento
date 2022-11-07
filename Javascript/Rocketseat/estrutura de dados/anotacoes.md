# Estrutura de dados

Uma maneira de organizar e ordenar informações como texto, números, booleanos, etc e registrá-los na memória do computador.

````js
// array 
[1,2,3] // elementos 1,2,3

//object 
{
    name: 'Fulano', idade: 50 // elementos name: 'Fulano', idade: 50
}
````  

### Gerenciando dados

Estrutura de dados tem a ver com a gestão das informações da aplicação
    - Modelar a estrutura;
    - Dar vida à estrutura (instanciar essa estrutura);
    - Criar as funcionalidades dessa estrutura
        -Ex: inserir, excluir, buscar, exibir, contar ...

### Array 

Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.

Uma das estruturas mais básicas, simples de criar e utilizar.

Acesso pelo index, respeita a ordem de inserção dos elementos e aceita valor duplicado.


````js
 ['a', 10, 'd', true] // total de 4 elementos
// 0  1    2    3
````


### Matrix
Significa que é um Array, dentro de outro array. Podemos ter muitos níveis


### Stack
Pilha
 - Linear, um após o outro
 - o último a entrar na pilha é o primeiro a sair
Métodos fundamentais
* push(): adicionar um elemento à pilha
* pop(): remover o elemento do topo da pilha
* peek(): obter o elemento do topo da pilha

Outros métodos poderão ser implementados como size() para mostrar o tamanho da pilha

````js
class Stack {
    constructor() {
        this.data = []
        this.top = - 1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top <0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return popeerTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : 
        undefined
    }
}

const stack = new Stack()
````

### Queue
Fila
- Primeiro a entrar na fila é o primeiro a sair
Métodos fundamentais
* enqueue(): adicionar um elemento ao final da fila
* dequeue(): remover o primeiro elemento a entrar na fila

Outros métodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre tantos outros.


````js
class Queue {
    constructor() {
        this.data = []
    }


enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila`)
}

dequeue() {
    const item = this.data.shift()
       console.log(`${item} saiu da fila`)
    }

}
const fila = new Queue()
````