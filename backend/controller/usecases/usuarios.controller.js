const usuarioDataAccess= require('../data-access/usuarios.controller');

exports.validarUsuario=async(req,res)=>{
  try {
    const usuario = await usuarioDataAccess.findOne({ nombre: nombreUsuario });

    if (!usuario) {
      console.log('Usuario no encontrado.');
      return false;
    }

    if (usuario.contraseña === contraseña) {
      console.log('Usuario validado con éxito.');
      return true;
    } else {
      console.log('Contraseña incorrecta.');
      return false;
    }
  } catch (error) {
    console.error('Error al validar el usuario:', error);
    return false;
  }
}

exports.crearUsuario = async (req, res) => {
  try {
 
    const { usuario, password, rol } = req.body;
    const { error, value } = validarUsuario(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const nuevoUsuario = await usuarioDataAccess.save(usuario, password, rol);
    return res.status(201).json({ usuario: nuevoUsuario });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioDataAccess.find();
    return res.status(200).json({ usuarios });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


exports.obtenerUsuario = async (req, res) => {
  try {

    const { usuario } = req.params;

    const usuarioEncontrado = await usuarioDataAccess.findOne(usuario);
    if (!usuarioEncontrado) {
      return res.status(404).json({ error: 'No se encontró ningún usuario con ese nombre' });
    }
    return res.status(200).json({ usuario: usuarioEncontrado });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


exports.actualizarUsuario = async (req, res) => {
  try {
    const { usuario } = req.params;
    const { password, rol } = req.body;
    const { error, value } = validarUsuario(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const nuevoUsuario = await usuarioDataAccess.findOneAndReplace(usuario, { usuario, password, rol });
    if (!nuevoUsuario) {
      return res.status(404).json({ error: 'No se encontró ningún usuario con ese nombre' });
    }
    return res.status(200).json({ usuario: nuevoUsuario });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    const { usuario } = req.params;
    const usuarioEliminado = await usuarioDataAccess.findOneAndDelete(usuario);
    if (!usuarioEliminado) {
      return res.status(404).json({ error: 'No se encontró ningún usuario con ese nombre' });
    }
    return res.status(200).json({ usuario: usuarioEliminado });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};