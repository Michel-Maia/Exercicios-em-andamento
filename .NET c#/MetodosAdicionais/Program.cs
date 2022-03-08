using System;

namespace MyApp
{

    class Program
    {

        static void Main(string[] args)
        {
            var texto = "Este texto é um teste";
            Console.WriteLine(texto.ToLower());
            Console.WriteLine(texto.ToUpper());
            Console.WriteLine(texto.Insert(5, "Aqui "));
            Console.WriteLine(texto.Remove(5, 5));
            Console.WriteLine(texto.Length);
        }
    }
}


