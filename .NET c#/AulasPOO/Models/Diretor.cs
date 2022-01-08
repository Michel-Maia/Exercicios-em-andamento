using System;

namespace AulasPOO.Models
{
    public class Diretor : Professor
    {
         public override void Apresentar ()
        {
             Console.WriteLine($"Olá, meu nome é {Nome} e sou diretor ");
        }
    }
}