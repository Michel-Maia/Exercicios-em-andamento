/*

    const e let são locais e só funcionam no escopo onde foi criada

    let não se aplica o **hoisting ou seja ele NÃO é elevado (jogado pra cima)


*/

let y = 2

{   
    let y = 1
    console.log('> existe y antes? ', y)
    
}

console.log('> existe y depois do bloco? ' , y)