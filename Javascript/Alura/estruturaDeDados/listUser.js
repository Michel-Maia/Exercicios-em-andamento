const listaDeUsuarios = [
    {
        name: 'Lilian', username: 'lilian.maia'
    },
];

const newUser = { name: 'Lilian', username: 'lilian.maia'};
const hasUser = listaDeUsuarios.find((user) => {
    return user.username  === newUser.username; 
});
if(!hasUser) {
    listaDeUsuarios.push(newUser);
} 

const result = listaDeUsuarios;

console.log(result);




