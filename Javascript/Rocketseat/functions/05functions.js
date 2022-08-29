// callback function

function sayMyName(name) {
    console.log('antes de executar a função callback')
    name()

    console.log('depois de executar a callback')
}

// sayMyName('teste') pode passar qualquer tipo de dado

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

// callback é uma função que está passando como parâmetro para outra função 
// callback - chame de volta

