/* table alunos */
CREATE TABLE alunos (
    cd_aluno number,
    nome_aluno varchar2(15),
    cd_sala varchar2(4),
    primary key(cd_aluno)
);

SELECT * FROM alunos;

INSERT INTO alunos (cd_aluno, nome_aluno, cd_sala) VALUES (001,'Enzo','AA01');
INSERT INTO alunos (cd_aluno, nome_aluno, cd_sala) VALUES (002,'Rafinha','AA03');
INSERT INTO alunos (cd_aluno, nome_aluno, cd_sala) VALUES (003,'Henry','AA04');
INSERT INTO alunos (cd_aluno, nome_aluno, cd_sala) VALUES (004,'Dom','AA02');
INSERT INTO alunos (cd_aluno, nome_aluno, cd_sala) VALUES (005,'Pedrinho','AA05');
 
/* table sala*/
CREATE TABLE sala (
    cd_sala varchar2(4),
    descricao varchar2(20),
    primary key(cd_sala)
); 

SELECT * FROM sala; 

INSERT INTO sala (cd_sala, descricao) VALUES ('AA01', 'LabInformatica');
INSERT INTO sala (cd_sala, descricao) VALUES ('AA02', 'LabCiencias');
INSERT INTO sala (cd_sala, descricao) VALUES ('AA03', 'Artes');
INSERT INTO sala (cd_sala, descricao) VALUES ('AA04', 'Ingles');
INSERT INTO sala (cd_sala, descricao) VALUES ('AA05', 'Esportes');
 
/* table professores*/
CREATE TABLE professores (
    cd_sala varchar2(4),
    nome_professor varchar2(20),
    cd_aluno number
); 

SELECT * FROM professores; 

INSERT INTO professores (cd_sala, nome_professor, cd_aluno) VALUES ('AA01', 'Lilian' , 001);
INSERT INTO professores (cd_sala, nome_professor, cd_aluno) VALUES ('AA02', 'Angelica', 002);
INSERT INTO professores (cd_sala, nome_professor, cd_aluno) VALUES ('AA03', 'Jessica', 003);
INSERT INTO professores (cd_sala, nome_professor, cd_aluno) VALUES ('AA04', 'Rodolfo', 004);
INSERT INTO professores (cd_sala, nome_professor, cd_aluno) VALUES ('AA05', 'Cesar', 005);