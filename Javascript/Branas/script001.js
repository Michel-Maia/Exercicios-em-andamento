// exemplo de conta mensal 

// janeiro 
salario1 = 1000
aluguel1 = 100
contaDeLuz1 = 50
contaDeAgua1 = 60
internet1 = 80
alimentacao1 = 400

//console.log(1000 - 100 - 50 - 60 - 80 - 400) // exemplo com números 

//console.log(salario1 - aluguel1 - contaDeLuz1 - contaDeAgua1 - internet1 - alimentacao1) // exemplo usando variaveis 

// substitui o console.log pela variavel saldo

saldo1 = salario1 - aluguel1 - contaDeLuz1 - contaDeAgua1 - internet1 - alimentacao1 
console.log("janeiro")
console.log(saldo1)

// boolean
estaNegativo1 =saldo1 < 0
if (estaNegativo1) {
   // console.log("Seu saldo em janeiro está negativo")
    console.log("Juros de janeiro")
    //console.log(saldo1 * 0.1)
    juros1 = salario1 * 0.1
    console.log(juros1)
    saldo1 = saldo1 + juros1
} else {
    //console.log("Seu saldo em janeiro está positivo")
    console.log("Saldo de janeiro")
   // console.log(saldo1 * 0.005)
   rendimentos1 = saldo1 * 0.005
}


// fevereiro
salario2 = 1100
aluguel2 = 100
contaDeLuz2 = 45
contaDeAgua2 = 70
internet2 = 80
alimentacao2 = 450

saldo2 = salario2 - aluguel2 - contaDeLuz2 - contaDeAgua2 - internet2 - alimentacao2 
console.log("fevereiro")
console.log(saldo2)

estaNegativo2 =saldo2 < 0
if (estaNegativo2) {
    console.log("Seu saldo em fevereiro está negativo")
    console.log("Juros de fevereiro")
    console.log(saldo2 * 0.1)
} else {
    console.log("Seu saldo em fevereiro está positivo")
    console.log("Rendimento de fevereiro foi de ")
    console.log(saldo2 * 0.005)
}



console.log(saldo1 + saldo2)





