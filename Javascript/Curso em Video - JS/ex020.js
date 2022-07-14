let num = [5, 2, 6, 7, 3]

console.log(num)

let pos = num.indexOf(6)
if (pos == -1){
    console.log(`O valor não foi encontrado `)
} else {
    console.log(`O valor está na posição ${pos}`)
}