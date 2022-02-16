using System;
using System.Collections.Generic;
using System.Linq;
using Colecoes.Helper;

namespace Colecoes
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arrayNumeros = new int[9] { 7, 70, 100, 0, 20, 1, 4, 4, 100};

        

            var minimo = arrayNumeros.Min();
            var maximo = arrayNumeros.Max();
            var medio = arrayNumeros.Average();
            var soma = arrayNumeros.Sum();
            var arrayUnico = arrayNumeros.Distinct().ToArray();


            System.Console.WriteLine($"Minimo: {minimo}");
            System.Console.WriteLine($"Maximo: {maximo}");
            System.Console.WriteLine($"Medio: {medio}");
            System.Console.WriteLine($"Soma: {soma}");
            System.Console.WriteLine($"Array original: {string.Join(", ", arrayNumeros)}");
            System.Console.WriteLine($"Array distinto: {string.Join(", ", arrayUnico)}");



            // var numerosParesQuery = 
            //     from num in arrayNumeros
            //     where num % 2 == 0
            //     orderby num
            //     select num;

            // var numerosParesMetodo = arrayNumeros.Where(x => x % 2 == 0).OrderBy(x => x).ToList();

            // System.Console.WriteLine("Números pares query: " + string.Join(", ", numerosParesQuery));
            // System.Console.WriteLine("Números pares métodos: " + string.Join(", ", numerosParesMetodo));


            // Dictionary<string, string> estados = new Dictionary<string, string>();

            // estados.Add("PB", "Paraiba");
            // estados.Add("SP", "São Paulo");
            // estados.Add("MG", "Minas Gerais");

            // foreach (KeyValuePair<string, string> item in estados)
            // {
            //      System.Console.WriteLine($"Chave: {item.Key}, Valor: {item.Value}");
            // }

            // string valorProcurado = "MG";

            // System.Console.WriteLine($"Removendo o valor: {valorProcurado}");

            // estados.Remove(valorProcurado);

            // foreach (KeyValuePair<string, string> item in estados)
            // {
            //      System.Console.WriteLine($"Chave: {item.Key}, Valor: {item.Value}");
            // }


            // System.Console.WriteLine("Valor original:");
            // System.Console.WriteLine(estados[valorProcurado]);

            // estados[valorProcurado] = "PB - João Pessoa";

            // System.Console.WriteLine("Valor atualizado:");
            // System.Console.WriteLine(estados[valorProcurado]);



        //     Stack<string> pilhaLivros = new Stack<string>();

        //     pilhaLivros.Push(".NET");
        //     pilhaLivros.Push("Código Limpo");
        //     pilhaLivros.Push("Scrum");

        //     System.Console.WriteLine($"Livros para a leitura: {pilhaLivros.Count}");
        //     while (pilhaLivros.Count > 0)
        //     {
        //         System.Console.WriteLine($"Próximo livro para a leitura: {pilhaLivros.Peek()}");
        //         System.Console.WriteLine($" {pilhaLivros.Pop()} Lido com sucesso");
        //     }

        //     System.Console.WriteLine($"Livros para leitura: {pilhaLivros.Count}");


            // Queue<string> fila = new Queue<string>();

            // fila.Enqueue("Jesus");
            // fila.Enqueue("Senhor");
            // fila.Enqueue("Salvador");

            // while (fila.Count > 0)
            // {
            //      System.Console.WriteLine($"Vez de: {fila.Peek()}");
            //      System.Console.WriteLine($"{fila.Dequeue()}");
            // }

            // System.Console.WriteLine($"Na Fila: {fila.Count}");

            // int[] arrayInteiros = new int[3];

            // arrayInteiros[0] = 10;
            // arrayInteiros[1] = 20;
            // arrayInteiros[2] = 30;

            // for (int i = 0; i < arrayInteiros.Length; i++)
            // {
            //     System.Console.WriteLine(arrayInteiros[i]);
            // }

            // foreach (int item in arrayInteiros)
            // {
            //     System.Console.WriteLine(item);
            // }


            // int[,] matriz = new int[4,2]
            // {
            //     { 7, 8 }, 
            //     { 10, 20 },
            //     { 2, 5 },
            //     { 100, 70 }

            // };

            // for (int i = 0; i < matriz.GetLength(0); i++)
            // {
            //     for (int j = 0; j< matriz.GetLength(1); j++)
            //     {
            //         System.Console.WriteLine(matriz[i, j]);
            //     }
            // }
            
            // int[,] matriz = new int[4,2];

            // matriz[0, 0] = 5;

            // OperacoesArray op = new OperacoesArray();
            // int[] array = new int[5] { 6, 3, 8, 1, 7 };
            // int[] arrayCopia = new int[10];
            // string[] arrayString = op.ConverterParaArrayString(array);

            // int valorProcurado = 7;

            // System.Console.WriteLine($"Capacidate atual do array: {array.Length}");

            // op.RedimensionarArray(ref array, array.Length * 2);

            // System.Console.WriteLine($"Capacidade atual do array após redimensionar: {array.Length}");

            // int indice = op.Obterindice(array, valorProcurado);

            // if (indice > -1)
            // {
            //     System.Console.WriteLine("O indice do elemento {0} é: {1}", valorProcurado, indice);
            // }
            // else
            // {
            //     System.Console.WriteLine("Valor não existente no array");
            // }

            // int valorAchado = op.ObterValor(array, valorProcurado);

            
            // if(valorAchado > 0)
            // {
            //     System.Console.WriteLine("Encontrei o valor");
            // }
            // else
            // {
            //     System.Console.WriteLine("Não encontrei o valor");
            // }


            // bool TodosMaiorQue = op.TodosMaiorQue(array, valorProcurado);

            // if (TodosMaiorQue)
            // {
            //     System.Console.WriteLine("Todos os valores são maiores que {0}", valorProcurado);
            // }
            // else
            // {
            //     System.Console.WriteLine("Existe valores que não são maiores do que {0}", valorProcurado);
            // }


            // System.Console.WriteLine("Array original: ");
            // op.ImprimirArray(array);

            // op.OrdenarBubbleSort(array);

            //op.Ordenar(ref array);

            // System.Console.WriteLine("Array ordenado: ");
            // op.ImprimirArray(array);

            
        //     int valorProcurado = 1;
        //     bool existe = op.Existe(array, valorProcurado);

        //     if (existe)
        //     {
        //         System.Console.WriteLine("Encontrei o valor: {0}", valorProcurado);
        //     }
        //     else
        //     {
        //         System.Console.WriteLine("Não encontrei o valor: {0}", valorProcurado);
        //     }

                // OperacoesLista opLista = new OperacoesLista();
                // List<string> estados = new List<string>();
                // string[] estadosArray = new string[2] {"MG", "RJ"} ;
                
                // estados.Add("SP");
                // estados.Add("PB");
                // estados.Add("SC");
                // estados.Add("RE");

                // System.Console.WriteLine($"Quantidade de elementos na lista: {estados.Count}");

                // opLista.ImprimirListaString(estados);

                // System.Console.WriteLine("Removendo o elemento");

                // estados.Remove("RE");
                
                // estados.Insert(1,"RS");
                // estados.AddRange(estadosArray);
                // opLista.ImprimirListaString(estados);


                // foreach (var item in estados)
                // {
                //     System.Console.WriteLine(item);
                // }


                // for (int i = 0; i < estados.Count; i++)
                // {
                //     System.Console.WriteLine($"Índice {i}, Valor: {estados[i]}");
                // }



        }

    }
}
