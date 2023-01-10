// Funções aceitam qualquer tipo de dado como argumento 

function imprimirDado(dado) {
    console.log(dado)
}

imprimirDado(1)
imprimirDado('texto')
imprimirDado(true)
imprimirDado({nome: 'Zé'})
imprimirDado([1,2,3])


// função que é passada como argumento


function imprimirDado1(dado) {
    console.log(dado())
}

imprimirDado1(function () {
    return 'Olá Dev'
})



