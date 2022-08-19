/*

    Var - é global e poderá funcionar fora de um escopo de bloco

    ** hoisting - eleva a var (joga pra cima)


*/

console.log('> existe x antes do bloco? ', x)

{

    var x = 0
}

console.log('> existe x depois do bloco? ' , x)