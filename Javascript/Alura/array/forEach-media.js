const notas  = [10 , 6.5, 8, 7.5];

let somaDasNotas = 0;

// função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual
notas.forEach(function (nota) {
    somaDasNotas += nota;
}); 

const media = somaDasNotas /notas.length;


console.log(`A media das notas é ${media}`);



