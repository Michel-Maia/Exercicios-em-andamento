using System;

namespace MyApp
{

    class Program
    {

        static void Main(string[] args)
        {
            var texto = "Este texto é um teste";
            Console.WriteLine(texto.Equals("Este"));
            Console.WriteLine(texto.Equals("este"));
        }
    }
}


