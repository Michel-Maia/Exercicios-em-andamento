namespace POO_MENTORIA.src.Entities
{
    public class Heroi
    {
        public Heroi(string Nome, string ClasseFantanstica){
            this.Nome = Nome;
            this.ClasseFantastica = ClasseFantanstica;
            this.Nivel = 1;
            this.PontosDeVida = 50;
            this.PontosDeMagia = 50;
        }


        public string Nome { get; set; }
        public int Nivel { get; set; }
        public int PontosDeVida { get; set; }
        public int PontosDeMagia { get; set; }
        public string ClasseFantastica { get; set; }

        public override string ToString()
        {
            return "Meu nome é " + this.Nome + "\n"
            + "Nivel:" + this.Nivel + "\n"
            + "Ponto de vida: " + this.PontosDeVida + "\n"
            + "Ponto de magia: " + this.PontosDeMagia + "\n" ;
        }
    }
}