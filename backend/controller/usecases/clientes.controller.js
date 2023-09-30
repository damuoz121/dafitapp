const dataClientes = require('../data-access/clientes.controller');

exports.registrarCliente = (req,res)=>{
  const {cedula, nombre, apellido,peso,estatura,fechadenacimiento,email,telefono,instructor,plan} = req.body;

  if (dataClientes.buscar(cedula, email, telefono)){
    return{error:'este cliente ya existe'}

  }else{
    dataClientes.registrar();
    res.send('Cliente registrado exitosamente')
  }
}

exports.eliminarCliente=(req, res)=>{
  req.body;
  if(dataClientes.buscar(apellido)){
    return{error:'este cliente no existe'}
  }else{
    dataClientes.deleteOne(apellido);
    res.send('Cliente eliminado con exito')
  }

}

exports.verClientes = async(req,res)=>{
  const clientes = await dataClientes.buscar();
  console.log('saludo'+ clientes.lista);
  if (!clientes){
    return{error:'no se puede registrar, este cliente ya existe'}
  }else{
    return {lista: clientes.lista};
  }

}

exports.actualizarClientes = async(req,res)=>{
  const clientes = await dataClientes.actualizar();
  console.log('saludo'+ clientes.lista);
  if (!clientes){
    return{error:'no se puede registrar, este cliente ya existe'}
  }else{
    return {lista: clientes.lista};
  }

}
