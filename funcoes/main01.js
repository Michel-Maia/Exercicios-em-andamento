const alunos = [
    {
        nome: 'Lilian',
        nota: 9,
        turma: '2B',
    },
    {
        nome: 'Maria Clara',
        nota: 8,
        turma: '1A',
    },
    {
        nome: 'Miguel',
        nota: 5,
        turma: '2C',
    },
    {
        nome: 'Thalles',
        nota: 4,
        turma: '1C',
    }
];

function alunoAprovado(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }

    }

    return aprovados;
}

console.log(alunoAprovado(alunos,5));