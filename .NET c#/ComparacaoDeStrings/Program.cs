using System;

namespace MyApp
{

    class Program
    {

        static void Main(string[] args)
        {
            //var texto = "Testando";
            //Console.WriteLine(texto.CompareTo("Testando"));
            //Console.WriteLine(texto.CompareTo("testando"));

            var texto = "Este texto é um teste";
            Console.WriteLine(texto.Contains("teste"));
            Console.WriteLine(texto.Contains("Teste", StringComparison.OrdinalIgnoreCase));
        }
    }
}