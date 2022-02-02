function getAdmins(map) {
    for([key, value] of map) {
        if (value === 'Admin') {
            getAdmins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Lilian', 'Admin');
usuarios.set('Maria Clara', 'Admin');
usuarios.set('Thalles', 'User');
usuarios.set('João', 'Admin');
usuarios.set('Luiz', 'Admin');

console.log(getAdmins(usuarios));
