const alunos = ["Lilian","Enzo","Angelica","Lara","Carla","Willian","Rodolfo","Cesar","Maria","Jéssica","Isabel","Maribel","Bruno","Ana","Carol","Dominique","Clara","Renan","Julia","João"];

// primeira posição , onde vai terminar
alunos.slice(0, 10);

console.log(alunos);

// slice retorna o array original e retorna um novo array

//const sala1 = alunos.slice(0, 10);
const sala1 = alunos.slice(0, alunos.length / 2);

console.log(sala1);


// senão colocar o segundo paramentro ele entende q será até o final
//const sala2 = alunos.slice(10);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala2);


//O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.








