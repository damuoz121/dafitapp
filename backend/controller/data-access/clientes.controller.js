const clientesData=require('../../models/clientes.model');

exports.buscar = async (req, res)=>{
    const listaClientes= await clientesData.find();
    console.log(listaClientes)

    console.log('imprime en el data-access')

    console.log('imprime en el data-acces')

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

exports.registrar = async (req, res) => {
    try {
      const datosCliente = req.body;
      const registrarCliente = await clientesData.save(datosCliente);
      if (registrarCliente) {
        res.status(201).json({ "Mensaje": "El usuario fue creado con éxito" });
      } else {
        res.status(422).json({ "Mensaje": "No se pudo crear el usuario" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ "Mensaje": "Se produjo un error interno del servidor" });
    }
  };

exports.actualizar= async(req, res)=>{
        const actualizarCliente = await  clientesData.findOneAndReplace(req.body._id,{nombre: req.body.nombre});
        if(actualizarCliente){
            return('cliente actualizado')
        }else{
            return('cliente no pudo ser actualizado')
        }
}
    

exports.registrarClientes = async (req, res) => {
    try {
      const datosClientes = req.body;
      const resultado = await Cliente.insertMany(datosClientes);
      if (resultado) {
        res.status(201).json({ "Mensaje": "Registro exitoso", "ClientesRegistrados": resultado });
      } else {
        res.status(422).json({ "Mensaje": "No se pudo registrar a los clientes" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ "Mensaje": "Se produjo un error interno del servidor" });
    }
  };


exports.actualizarClientes = async (req, res) => {
    try {
      const datosActualizados = req.body;
      const filtro = {};
      if (req.query.nombre) {
        filtro.apellido = req.query.apellido;
      }
      if (req.query.cedula) {
        filtro.cedula = req.query.cedula;
      }
      const resultado = await Cliente.updateMany(filtro, datosActualizados);
      if (resultado.datosActualizados > 0) {
        res.status(200).json({ "Mensaje": "Clientes actualizados exitosamente" });
      } else {
        res.status(404).json({ "Mensaje": "No se encontraron clientes para actualizar" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ "Mensaje": "Se produjo un error interno del servidor" });
    }
  };