/*var idade = 22
if (idade < 18 ){
    console.log('Menor de idade')
} else {
    console.log('Manior de idade')
}*/

// var idade = 16
// var idade = 12
//var idade = 65
var idade = 33
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18 || idade >= 65) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
}

// usei o terminal do node para testar o comando 