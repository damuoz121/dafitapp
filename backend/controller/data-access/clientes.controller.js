const registrarCliente=require('../usecases/clientes.controller');
const verCliente=require('../usecases/clientes.controller');
const actualizarCliente= require('../usecases/clientes.controller');
const eliminarCliente= require('../usecases/clientes.controller');

export default function RegistrarCliente(){
    const existe = async function findOne(){
        return await registrarCliente.findOne()
        }
        //crea el objeto y lo guarda usando la funcion desacoplada de guardado 
        async function create(cliente){
            return   await registrarCliente.create(cliente)
        }return {
            existe,create
        }  
}

export default function VerCliente(_id){
    //ver los clientes
    async function find({}){
        return await verCliente.find()
    }
}

export default function ActualizarCliente(_id){
    //actualiza los datos del cliente con el id
    async function update (id , data ){
        return await actualizarCliente.update(id,data);
    }
}

export default function EliminarCliente(_id){
    //elimina un registro segun su ID
    async function findOneAndDelete(id){
        return await eliminarCliente.findOneAndDelete(id);
    }
}

module.exports={RegistrarCliente,VerCliente,ActualizarCliente,EliminarCliente};