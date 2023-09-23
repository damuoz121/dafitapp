const dataClientes = require('../data-access/clientes.controller');
const clientesController={};

exports.RegistrarCliente = (req,res)=>{
  req.body;
  if (dataClientes.buscar(_id)){
    return{error:'este cliente ya existe'}

  }else{
    dataClientes.registrar();
    res.send('Cliente registrado exitosamente')
  }
}

exports.EliminarCliente=(req, res)=>{
  req.body;
  if(dataClientes.buscar(_id)){
    return{error:'este cliente no existe'}
  }else{
    dataClientes.deleteOne(_id);
    res.send('Cliente eliminado con exito')
  }

}

exports.VerCliente= async()=>{
  const clientes =await dataClientes.find();
  if (clientes){
    return{error:'no se puede registrar, este cliente ya existe'}
  }
}

