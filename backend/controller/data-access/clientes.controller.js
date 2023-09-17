const registrarCliente=require('../../models/clientes.model');
const verCliente=require('../../models/clientes.model');
const actualizarCliente= require('../../models/clientes.model');
const eliminarCliente= require('../../models/clientes.model');

export default function guardar(){
    return async (req,res)=>{
        try{
            const cliente = await registrarCliente(req);
            res.status(201).json({
                message:'cliente creado',
                data:cliente});
                }catch(error){
                    console.log('Error al crear el usuario')
                }
                }
}


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

export default function encontraryreemplazar(){
async function update(_id , clienteActualizado ){
    await  actualizarCliente.findOneAndReplace(_id,clienteActualizado);
    };
}

export default function ActualizarCliente(_id){
    //actualiza los datos del cliente con el id
    async function update (id , data ){
        return await actualizarCliente.updateMany(id,data);
    }
}






export default function eliminar(){
    //elimina un registro por su _id
    async  function borrar (_id){
        return    await eliminarCliente.deleteOne(_id);}
}



export default function EliminarCliente(_id){
    //elimina un registro segun su ID
    async function findOneAndDelete(_id){
        return await eliminarCliente.findOneAndDelete(_id);
    }
}



module.exports={RegistrarCliente,VerCliente,ActualizarCliente,EliminarCliente};