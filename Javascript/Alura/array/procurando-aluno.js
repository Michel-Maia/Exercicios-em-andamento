const alunos = ["Lilian", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado(a)`);

        // para descobrir o índice 

        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        //console.log(indice);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        //console.log(mediaDoAluno);
        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    } else {
        console.log("Aluno não encontrado");
    }
}

exibeNomeENota("Lilian");




