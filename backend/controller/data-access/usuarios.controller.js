const Usuario=require('../../models/usuarios.model')

exports.save = async (usuario, password, rol) => {
  const nuevoUsuario = new Usuario({ usuario, password, rol });
  return await nuevoUsuario.save();
};

exports.insertMany = async (usuarios) => {
  return await Usuario.insertMany(usuarios);
};

exports.find = async () => {
  return await Usuario.find();
};

exports.findOne = async (usuario) => {
  return await Usuario.findOne({ usuario });
};

exports.findOneAndReplace = async (usuario, nuevoUsuario) => {
  return await Usuario.findOneAndReplace({ usuario }, nuevoUsuario);
};

exports.updateMany = async (filtro, actualizacion) => {
  return await Usuario.updateMany(filtro, actualizacion);
};

exports.deleteOne = async (usuario) => {
  return await Usuario.deleteOne({ usuario });
};

exports.findOneAndDelete = async (usuario) => {
  return await Usuario.findOneAndDelete({ usuario });
};
