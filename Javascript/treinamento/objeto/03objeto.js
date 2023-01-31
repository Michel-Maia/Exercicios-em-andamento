
const arrayObj = [
    {
        nome: 'super-nintendo',
        fabricante: 'Nintendo',
    },
    {
        nome: 'Playstation',
        fabricante: 'Sony',
    },
    {
        nome: 'X-Box',
        fabricante: 'Microsoft',
    },
    {
        nome: 'Mega-drive',
        fabricante: 'Sega',
    },
    {
        nome: 'WII',
        fabricante: 'Nintendo',
    }

]


//const firstIndex = arrayObj[0];

//console.log(firstIndex);

function resgateMarca (marca) {
    let response = [];

    for (let i = 0; i < arrayObj.length; i += 1) {
        if (arrayObj[i].fabricante === marca) {
           response.push(arrayObj[i])
        }
    }

    return response;
}


//console.log(resgateMarca('Nintendo'));

resgateMarca('Nintendo');



