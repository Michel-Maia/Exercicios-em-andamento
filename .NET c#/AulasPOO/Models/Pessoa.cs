using System;

namespace AulasPOO.Models
{
    public class Pessoa
    {
        public string Nome { get; set; }

        public int Idade { get; set; }

        public string documento { get; set; }

        public virtual void Apresentar ()
        {
            Console.WriteLine($"Olá, meu nome é {Nome} e tenho {Idade} anos");
        }
    }
}