const clientesData=require('../../models/clientes.model');

exports.buscar = async (req, res)=>{
    const listaClientes= await clientesData.find();
    if(listaClientes){
        return {lista: listaClientes};
    }else{
        return {'error':'no se encontraron resultados'};
    }
};

exports.eliminar = async (req, res)=>{
    const listaClientes =await clientesData.deleteOne({_id: req.params._id}, function(err){
        if(listaClientes){
        return('Cliente eliminado con exito')
            }else{
                res.status(501).json({'Error': 'No se pudo eliminar el cliente'});}
                });
}

exports.registrar = async(req, res)=>{
    const registrarCliente = await clientesData.save();
    if (!registrarCliente ) {
        res.status(422);
        res.json({"Mensaje": "El usuario no fue creado"});
        }}

exports.actualizar= async(req, res)=>{
        const actualizarCliente = await  clientesData.findOneAndReplace(req.body._id,{nombre: req.body.nombre});
        if(actualizarCliente){
            return('cliente actualizado')
        }else{
            return('cliente no pudo ser actualizado')
        }
}
    

exports.registrarclientes= async(req, res)=>{
    const registrar =await clientesData.insertMany();
    if(registrar){
        return('Registro  exitoso')
    }
}