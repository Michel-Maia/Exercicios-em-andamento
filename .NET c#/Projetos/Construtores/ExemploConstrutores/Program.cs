using System;
using ExemploConstrutores.Models;

namespace ExemploConstrutores
{
    class Program
    {
        public delegate void Operacao(int x, int y);

        static void Main(string[] args)
        {
            // Pessoa p1 = new Pessoa();
            // p1.Apresentar();

            // Log log = Log.GetInstance(); 

            // Log.PropriedadeLog = "Teste instancia";

            // Log log2 = Log.GetInstance();
            // System.Console.WriteLine(log2.PropriedadeLog);

            // Aluno p1 = new Aluno("Teste", "Teste1", "Teste2");
            // p1.Apresentar();

            // Data data = new Data();
            // data.SetMes(20);

            // data.Mes = 12;
            // System.Console.WriteLine(data.Mes);

            // data.ApresentarMes();

            // const double pi = 3.14;
            // System.Console.WriteLine(pi);

            // Operacao op = new Operacao(Calculadora.Somar);
            
            // op += Calculadora.Subtrair;
            // //Operacao op = Calculadora.Somar;
            // op.Invoke(10, 10);

            Matematica m =new Matematica(10, 20);
            m.Somar();

        }
    }
}
