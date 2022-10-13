CREATE TABLE nota_provas (
    nota_aluno number (10,2),
    nome_professor varchar2(20),
    cd_sala varchar2(4)
);

SELECT * FROM nota_provas; 

INSERT INTO nota_provas (nota_aluno, nome_professor, cd_sala) VALUES (08.5, 'Lilian' , 'AA01');
INSERT INTO nota_provas (nota_aluno, nome_professor, cd_sala) VALUES (10, 'Lilian' , 'AA02');
INSERT INTO nota_provas (nota_aluno, nome_professor, cd_sala) VALUES (08.2, 'Lilian' , 'AA03');
INSERT INTO nota_provas (nota_aluno, nome_professor, cd_sala) VALUES (07.1 , 'Lilian' , 'AA04');
INSERT INTO nota_provas (nota_aluno, nome_professor, cd_sala) VALUES (04.5, 'Lilian' , 'AA05');


