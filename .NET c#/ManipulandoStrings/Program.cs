using System;

namespace MyApp
{

    class Program
    {

        static void Main(string[] args)
        {
            var texto = " Este texto é um teste ";
            Console.WriteLine(texto.Replace("Este" , "Isto"));
            Console.WriteLine(texto.Replace("e" , "X"));

            var divisao = texto.Split(" ");
            Console.WriteLine(divisao[0]);
            Console.WriteLine(divisao[1]);
            Console.WriteLine(divisao[2]);
            Console.WriteLine(divisao[3]);

            //var resultado = texto.Substring(5, 5);
            var resultado = texto.Substring(5, texto.LastIndexOf("o"));
            Console.WriteLine(resultado);

            Console.WriteLine(texto.Trim());
        }

    }
}
