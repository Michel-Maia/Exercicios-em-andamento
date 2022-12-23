const num = 10;

if (num === null) {
 console.log('ex 1 número não fornecido');
}


const num1 = 20;

if (num1 !== null) {
 console.log(`o número é ${num1}`);
}

const num2 = null;

if (num2 === null) {
 console.log('ex 2 número não fornecido');
}

// pode ser escrito da seguinte forma, pois null é considerado um valor “falsy”
const num3 = null;

if (!num3) {
    console.log('ex 3 número não fornecido');
}


const num4 = 11;

if (num4 > 10 || !num4) {
 console.log('ex 4 número não válido');
}

const num5 = 11;

if (num5 > 10 && num5 < 20) {
 console.log('ex 5 número  válido');
}












