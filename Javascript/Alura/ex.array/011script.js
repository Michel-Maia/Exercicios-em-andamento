// O termo callback se refere à função que é “chamada de volta” dentro de outra função

const arrayNums = [1, 2, 3, 4];



function multiplicaPorDez(num) {
    return num * 10
}


const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);



