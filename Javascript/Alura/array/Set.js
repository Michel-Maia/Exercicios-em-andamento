// removendo elementos repetidos

const nomes = ["Ana", "Clara","Ana", "João","João", "Ana"];

// os elementos de um Set não podem se repetir

const meuSet =new Set(nomes);

const nomeAtualizados = [...meuSet];

console.log(nomeAtualizados);



