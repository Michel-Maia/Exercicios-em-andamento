// desafios

/*Transformar notas escolares

1- Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

- de 90 para cima - A
- entre 80 - 89 - B
- entre 70 - 79 - C
- entre 60 - 69 - D
- menor que 60 - E

*/
 
let nota = 90
let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaE = nota < 60

let notaFinal;

    if (notaA) {
       notaFinal = "A"
    } else if (notaB) {
        notaFinal = "B"
    }  else if (notaC) {
        notaFinal = "C"
    }   else if (notaD) {
        notaFinal = "D"
    }  else if (notaE) {
        notaFinal = "E"
    } else {
        notaFinal = "Nota inválida"
    }

    console.log(notaFinal);



/*
    Fluxo de caixa familiar 

2- Crie um objeto que possuirá 2 propriedades. ambas do tipo array:
        * receitas: []
        * despesas: []
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let caixa = {
    receitas: [2500, 3100, 250, 148],
    despesas: [600, 700, 250, 300, 1000, 1890, 800],
}

function soma(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateFamilia() {
    const calculateReceitas = soma(caixa.receitas)
    const calculateDespesas = soma(caixa.despesas)

    const total =  calculateReceitas - calculateDespesas

    const saldoPositivo = total >= 0

    let caixaMensal = "negativo"

    if (saldoPositivo) {
        caixaMensal = "positivo"
    }
}

console.log(`Seu saldo é ${caixaMensal}: ${total.toFixed(2)}`)

calculateFamilia()


/* Celsius em fahrenheit

3 - Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32 
    

*/







/* Buscando e contando dados em Arrays 

4 - Baseado no array de lIvros por categorias abaixo, faça os seguintes desafios
    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar livros do autor 
    - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

*/