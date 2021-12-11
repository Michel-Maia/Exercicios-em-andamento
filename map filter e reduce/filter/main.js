function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 2, 33, 7, 8, 4, 10];

console.log(filtraPares(meuArray));