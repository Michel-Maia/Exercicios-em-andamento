using System;

namespace AulasPOO.Models
{
    public class Professor : Pessoa
    {
        public double Salario { get; set; }

         
        public override void Apresentar ()
        {
             Console.WriteLine($"Olá, meu nome é {Nome} e sou professor meu salario é de {Salario} ");
        }
 
    }
}