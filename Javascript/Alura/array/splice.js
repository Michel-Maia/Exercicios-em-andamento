const nomes = ["Lilian","Enzo","Angelica","Lara","Carla","Willian","Rodolfo","Cesar","Maria","Jéssica"];

// retirar valor

// posição do index que vai ser removido, segundo será a qnt de itens a partir do index que será removido
nomes.splice(1, 2); // indice 1 , retirar 2 itens a partir dele


console.log(nomes);

nomes.push("Angelica");

console.log(nomes);

// splice aceita um terceiro parametro
// sendo esse para add 


nomes.splice(4, 2, "Rodrigo");

console.log(nomes);


