const alunos = ["Ana", "Marcos", "Maria", "Julia"];
const medias = [7, 4.5, 8, 7.5];

// filter retorna verdadeiro ou falso
const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);


