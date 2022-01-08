using System;
using System.Collections.Generic;
using System.IO;
using AulasPOO.Helper;
using AulasPOO.Interfaces;
using AulasPOO.Models;

namespace AulasPOO
{
    class Program
    {
        static void Main(string[] args)
        {
            var caminho = "D:\\.01.CuRsoS PrOgRaMaÇãO\\Aulas geral - Em andamento\\.NET c#\\TrabalhandoComArquivos";
            var caminhoPathCombine = Path.Combine(caminho, "Pasta Teste 1");
            var caminhoArquivo = Path.Combine(caminho, "arquivo-teste-string1.txt");
            var caminhoArquivoTeste = Path.Combine(caminho, "arquivo-teste-string1.txt");
            var caminhoArquivoTesteCopia = Path.Combine(caminho, "arquivo-teste-string1.bkp");
            

            var listaString = new List<string> {"Linha 1", "Linha 2", "Linha 3"};
            var listaStringContinuacao = new List<string> {"Linha 4", "Linha 5"};
            
            var novoCaminhoArquivo = Path.Combine(caminho, "Pasta Teste 2", "arquivo-teste-string1");

            FileHelper helper = new FileHelper();
            // helper.ListarDiretorios(caminho);
            // helper.ListarArquivosDiretorios(caminho);
            //helper.CriarDiretorio(Path.Combine(caminho, "Pasta Teste 3", "SubPasta 3"));
            //helper.ApagarDiretorio(caminhoPathCombine, true);
            //helper.CriarArquivoTexto(caminhoArquivo, "Olá teste");
            // helper.CriarArquivoTextoStream(caminhoArquivo, listaString);
            // helper.AdicionarTextoStream(caminhoArquivo, listaStringContinuacao);
            // helper.lerArquivoStream(caminhoArquivo);
            // helper.MoverArquivo(caminhoArquivo, novoCaminhoArquivo, false);
            // helper.CopiarArquivo(caminhoArquivoTeste, caminhoArquivoTesteCopia, false);
            helper.DeletarArquivo(caminhoArquivoTesteCopia);


            // ICalculadora calc = new Calculadora();
            // System.Console.WriteLine(calc.Somar(10, 10));

            // Computador comp = new Computador();
            // System.Console.WriteLine(comp.ToString());

            // Corrente c = new Corrente();
            // c.Creditar(100);

            // c.ExibirSaldo();

            // Calculadora calc = new Calculadora();
            // System.Console.WriteLine("Resultado da primeira soma: " + calc.Somar(10, 10));
            // System.Console.WriteLine("Resultado da segunda soma: " + calc.Somar(10, 10, 10));

            // Aluno p1 = new Aluno();
            // p1.Nota = 10;
            // p1.Nome = "Jesus";
            // p1.Idade = 33;

            // p1.Apresentar();

            // Professor p2 = new Professor();
            // p2.Salario = 4000;
            // p2.Nome = "Jesus";
            // p2.Idade = 33;

            // p2.Apresentar();


            // Pessoa p1 = new Pessoa();

            // p1.Nome = "Jesus";
            // p1.Idade = 33;

            // p1.Apresentar();

            // Retangulo r = new Retangulo();
            // r.DefinirMedidas(30,30);

            // System.Console.WriteLine($"Area: {r.ObterArea()}");

            // r.comprimento = 3;


        }
    }
}
