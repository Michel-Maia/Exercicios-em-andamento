const meuArray = [7, 30, 30, 40, 5, 223, 2049, 3035, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));