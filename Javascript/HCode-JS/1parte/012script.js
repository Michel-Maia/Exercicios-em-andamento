let agora = new Date();

//console.log(agora.getDate()); 
// mostra o dia

//console.log(agora.getMonth()); 
// mostra o mês , mas a contagem começa do 0 

//console.log(agora.getFullYear()); 
// mostra o ano fechado

// manipulando cada parte da data 



console.log(agora.toLocaleDateString("pt-br"));
// usa a localização do sistema operacional do usúario para mostrar a data

