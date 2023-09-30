const dataUsuarios= require('../data-access/usuarios.controller');

exports.registrarUsuario = (req,res)=>{
    const {usuario,password,rol} = req.body;
  
    if (dataUsuarios.buscartodosUsuarios(usuario)){
      return{error:'este usuario ya existe'}
  
    }else{
      dataUsuarios.registrarUsuario();
      res.send('Usuario registrado exitosamente')
    }
  }

  exports.eliminarUsuario=(req, res)=>{
    req.body;
    if(dataUsuarios.buscarUsuario(_id)){
      return{error:'este usuario no existe'}
    }else{
      dataUsuarios.deleteOne(_id);
      res.send('Usuario eliminado con exito')
    }
  
  }
  
  exports.verUsuarios = async(req,res)=>{
    const usuario = await dataUsuarios.buscarUsuario();
    console.log('saludo '+ usuario.usuario);
    if (!usuario){
      return{error:'no se pueden ver los usuarios'}
    }else{
      return {lista: usuario.lista};
    }
  
  }
  
  exports.actualizarUsuario = async(req,res)=>{
    const usuario = await dataUsuarios.actualizarUsuario();
    console.log('saludo'+ usuario.usuario);
    if (!usuario){
      return{error:'no se puede actualizar'}
    }else{
      return {lista: usuario.lista};
    }
  
  }