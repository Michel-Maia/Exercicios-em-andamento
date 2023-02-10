export class Fatura {

    private criadaEm: Date;
    private quantidade: number;
    private valor: number;

    constructor(
        criadaEm: Date, 
        quantidade: number, 
        valor: number
    ) {
            this.criadaEm = criadaEm;
            this.quantidade = quantidade;
            this.valor = valor;
    }
}



