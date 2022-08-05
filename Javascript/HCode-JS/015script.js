let celular = function(){

    this.cor = "prata";

    this.ligar = function() {
        console.log("uma ligação");
        return "ligando";
    }
}

let objeto = new celular();

//console.log(objeto);

console.log(objeto.ligar());