const Cliente=require('../../models/clientes.model');

exports.save = async (cedula, usuario, nombre, apellido, peso, estatura, fechadenacimiento, email, telefono, instructor) => {
  const nuevoCliente = new Cliente({ cedula, usuario, nombre, apellido, peso, estatura, fechadenacimiento, email, telefono, instructor });
  return await nuevoCliente.save();
};

exports.insertMany = async (clientes) => {
  return await Cliente.insertMany(clientes);
};

exports.find = async () => {
  return await Cliente.find();
};

exports.findOne = async (cedula) => {
  return await Cliente.findOne({ cedula });
};

exports.findOneAndReplace = async (cedula, nuevoCliente) => {
  return await Cliente.findOneAndReplace({ cedula }, nuevoCliente);
};

//filtro
exports.updateMany = async (email) => {
  return await Cliente.updateMany(email);
};

exports.deleteOne = async (cedula) => {
  return await Cliente.deleteOne({ cedula });
};

exports.findOneAndDelete = async (cedula) => {
  return await Cliente.findOneAndDelete({ cedula });
};