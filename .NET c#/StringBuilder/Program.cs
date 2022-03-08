using System;
using System.Text;

namespace MyApp
{

    class Program
    {

        static void Main(string[] args)
        {
            var texto = new StringBuilder();
            texto.Append("Este texto é um teste");
            texto.Append("Este texto");
            texto.Append("Este é um teste");
            texto.Append("Este teste");
            
            texto.ToString();
            Console.WriteLine(texto);
        }
    }
}


