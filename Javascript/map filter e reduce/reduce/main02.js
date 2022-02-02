const lista = [
    {
        name: 'po de cafe',
        preco: 5,
    },
    {
        name: 'pao de forma',
        preco: 10,
    },
    {
        name: 'leite integral',
        preco: 4,
    },

];

const saldoDisponivel = 50;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current , index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));