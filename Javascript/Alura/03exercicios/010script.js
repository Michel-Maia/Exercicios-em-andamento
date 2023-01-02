let estudantes = [
    {id: 1, nome: "Andy", curso: "JavaScript"},
    {id: 2, nome: "Karine", curso: "Python"},
    {id: 3, nome: "João", curso: "JavaScript"},
    {id: 4, nome: "Moni", curso: "JavaScript"},
    {id: 5, nome: "Antônio", curso: "JavaScript"},
    {id: 6, nome: "Luan", curso: "C#"},
    {id: 7, nome: "Bia", curso: "Python"},
    {id: 8, nome: "Vinny", curso: "C#"}
]


let salaDeJavascript = filtraEstudantesPorCurso('JavaScript')
console.log(salaDeJavascript)

function filtraEstudantesPorCurso(nomeDoCurso) {
    return estudantes.filter(alunos => alunos.curso == nomeDoCurso)
}


console.log(estudantes.filter(estudante => estudante.curso == 'JavaScript'))
