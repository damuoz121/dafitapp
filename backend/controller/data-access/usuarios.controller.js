const registrarUsuario=require('../usecases/usuarios.controller');
const verUsuario=require('../usecases/usuarios.controller');
const actualizarUsuario= require('../usecases/usuarios.controller');
const eliminarUsuario= require('../usecases/usuarios.controller');

export default function RegistrarUsuario(){
    const existe = async function findOne(){
        return await registrarUsuario.findOne()
        }
        //crea el objeto y lo guarda usando la funcion desacoplada de guardado 
        async function create(usuario){
            return   await registrarUsuario.create(usuario)
        }return {
            existe,create
        }  
}

export default function VerUsuario(_id){
    //ver usuario
    async function find({}){
        return await verUsuario.find()
    }
}

export default function ActualizarUsuario(_id){
    //actualiza los datos del usuario con el id
    async function update (id , data ){
        return await actualizarUsuario.update(id);
    }
}

export default function EliminarUsuario(_id){
    //elimina un registro segun su ID
    async function findOneAndDelete(id){
        return await eliminarUsuario.findOneAndDelete(id);
    }
}

module.exports={RegistrarUsuario,VerUsuario,ActualizarUsuario,EliminarUsuario};