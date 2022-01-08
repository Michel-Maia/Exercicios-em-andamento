@ECHO OFF
IF NOT EXIST ".\jre" (
	ECHO O diretorio 'JRE' nao existe. Baixe novamente o arquivo a partir do site da Softblue e realize a descompactacao antes de iniciar a ferramenta.
	PAUSE
	GOTO end;
) ELSE IF NOT EXIST ".\softblue-logic.jar" (
    ECHO O arquivo 'softblue-logic.jar' nao existe. Baixe novamente o arquivo a partir do site da Softblue e realize a descompactacao antes de iniciar a ferramenta.
	PAUSE
	GOTO end;
)

start .\jre\bin\javaw.exe -jar softblue-logic.jar
exit