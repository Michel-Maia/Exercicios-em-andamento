// PROP TYPES
// instalar nas dependencias de desenvolvedor
// npm i -D prop-types

MyComponent.propTypes = {

// Todos os validadores aqui são , por padrão , validaddorres opcionais
// para torná-los obrigatórios, basta adicionar  .isRequired 

    numeroObrigatorio: PropTypes.number.isRequired,


// Tipos básicos do JS 
    stringOpcional: PropTypes.string, 
    numeroOpcional: PropTypes.number, 
    booleanoOpcional: PropTypes.bool, 
    funcaoOpcional: PropTypes.func, 
    objetoOpcional: PropTypes.object, 
    arrayOpcional: PropTypes.array, 

// Um array de determinado tipo básico 
    arrayDeNUmeros: PropTypes.arrayOf(PropTypes.number),

//Um objeto de determinado tipo básico 
    objetoDeNUmeros: PropTypes.objectOf(PropTypes.number),

//Um objeto de determinado com forma específica 
    objetoComForma: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }),


// Um objeto que não permite props extras
    objetoComFormatoRigoso: PropTypes.exact({
        name: PropTypes.string,
        quantity: PropTypes.number,
        availability: PropTypes.bool,
    }),

};