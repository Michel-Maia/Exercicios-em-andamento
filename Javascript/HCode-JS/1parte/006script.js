function calc(x1,x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);

}

// eval executa a string (nesse exemplo uma função executada dentro de outra função)

let resultado = calc(1,2, "+");

console.log(resultado);