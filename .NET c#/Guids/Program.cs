using System;

namespace MyApp
{

    class Program
    {

        static void Main(string[] args)
        {
            var id = Guid.NewGuid();
            id.ToString();

            //id = new Guid("");

            
            Console.WriteLine(id.ToString().Substring(0,8));
            
        }
    }
}