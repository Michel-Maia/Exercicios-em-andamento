// desafios

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
