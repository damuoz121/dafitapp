const usuariosData=require('../../models/usuarios.model')

// Crear un nuevo usuario
exports.registrarUsuario=async (req, res)=> {
  try {
    const usuario = new usuario(usuariosData);
    await usuariosData.save();
    return usuario;
  } catch (error) {
    throw error;
  }
}

// Buscar todos los usuarios
exports.buscartodosUsuarios=async (req, res)=> {
  try {
    const usuarios = await usuariosData.find();
    return usuarios;
  } catch (error) {
    throw error;
  }
}

// Buscar un usuario por ID
exports.buscarUsuario=async (req, res)=>{
  try {
    const usuario = await usuariosData.findOne();
    return usuario;
  } catch (error) {
    throw error;
  }
}

// Actualizar un usuario por ID
exports.actualizarUsuario=async (req, res)=> {
  try {
    const usuario = await usuariosData.updateMany(usuarioId, nuevoData, { new: true });
    return usuario;
  } catch (error) {
    throw error;
  }
}
//Reemplazar un usuario
exports.actualizarUsuario=async (req, res)=> {
    try {
      const usuario = await usuariosData.findOneAndReplace(usuarioId, nuevoData, { new: true });
      return usuario;
    } catch (error) {
      throw error;
    }
  }

// Bloquear un usuario por ID (puede ser un campo "bloqueado" en el esquema)
exports.bloquearUsuario=async (req, res)=>{
  try {
    const usuario = await usuariosData.findByIdAndUpdate(usuarioId, { bloqueado: true }, { new: true });
    return usuario;
  } catch (error) {
    throw error;
  }
}

exports.eliminarUsuario=async (req, res)=> {
    try {
      const resultado = await usuariosData.deleteOne(usuarioId);
      return resultado;
    } catch (error) {
      throw error;
    }
  }

// Eliminar un usuario por ID
exports.encontrarYeliminarUsuario=async (req, res)=> {
  try {
    const resultado = await usuariosData.findOneAndDelete(usuarioId);
    return resultado;
  } catch (error) {
    throw error;
  }
}
