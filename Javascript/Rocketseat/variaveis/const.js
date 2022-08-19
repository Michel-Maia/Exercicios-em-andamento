/*

    const - não é alterada

*/

const z = 3;

{
    const z = 4
    console.log('> existe z' , z)
}

console.log('>  existe z depois do bloco? ' , z)