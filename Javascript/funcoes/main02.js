function calculaIdade(anos) {
    return 'Daqui a ${anos} anos, ${this.nome} terá ${
      this.idade + anos
    } anos de idade.`;  
}

const pessoa1 = {
    nome: 'Maria Clara',
    idade: 30,
};

const pessoa2 = {
    nome: 'Lilian',
    idade: 33,
};

const animal = {
    nome: 'Kiwi',
    idade: 1,
};

console.log(calculaIdade.call(pessoa2, 30));