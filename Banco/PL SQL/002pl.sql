-- teste , criado a planilha professores2 para ADD duas colunas novas 

 

CREATE TABLE professores2 (
              cd_sala varchar2(5),
              nome_professor varchar2(20),
              cd_aluno number
);

 

 

SELECT  * FROM professores2;
 

INSERT INTO professores2 (cd_professor, cd_sala, nome_professor, cd_aluno) VALUES (010, 'AA201', 'Lilian', 001);
INSERT INTO professores2 (cd_professor, cd_sala, nome_professor, cd_aluno) VALUES (011, 'AA202', 'Angelica', 002);
INSERT INTO professores2 (cd_professor, cd_sala, nome_professor, cd_aluno) VALUES (012, 'AA203', 'Jessica', 003);
INSERT INTO professores2 (cd_professor, cd_sala, nome_professor, cd_aluno) VALUES (013, 'AA204', 'Rodolfo', 004);
INSERT INTO professores2 (cd_professor, cd_sala, nome_professor, cd_aluno) VALUES (014, 'AA205', 'Cesar', 005);

 

ALTER TABLE professores2
    ADD (salario varchar2(5),
        data_efetivacao varchar2(6));
       

ALTER TABLE professores2
    MODIFY salario number;   

ALTER TABLE professores2
    MODIFY data_efetivacao DATE;
 
 

SELECT  * FROM professores2;

-- add os dados pra teste

UPDATE professores2
SET salario = 4000 
WHERE cd_professor = 010; 

UPDATE professores2
SET data_efetivacao = TO_DATE('15/11/2022','DD/MM/RRRR')
WHERE cd_professor = 010; 

UPDATE professores2
SET salario = 5000 , data_efetivacao = TO_DATE('05/11/2022','DD/MM/RRRR')
WHERE cd_professor = 011; 

UPDATE professores2
SET salario = 3500 , data_efetivacao = TO_DATE('20/11/2022','DD/MM/RRRR')
WHERE cd_professor = 012; 

UPDATE professores2
SET salario = 4000 , data_efetivacao = TO_DATE('07/11/2022','DD/MM/RRRR')
WHERE cd_professor = 013; 

UPDATE professores2
SET salario = 3000 , data_efetivacao = TO_DATE('01/11/2022','DD/MM/RRRR')
WHERE cd_professor = 014; 

/* não foi usado o insert into 
INSERT INTO professores2 (salario, data_efetivacao)
VALUES (4000, TO_DATE('15/11/2022', 'DD/MM/RRRR'));

 

INSERT INTO professores2 (salario, data_efetivacao)
VALUES (4000, TO_DATE('15/11/2022', 'DD/MM/RRRR'));

*/