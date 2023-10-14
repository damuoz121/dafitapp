const Rutina = require('../../models/rutinas.model');

exports.save = async (dia, ejercicios) => {
  const nuevaRutina = new Rutina({ dia, ejercicios });
  return await nuevaRutina.save();
};

exports.insertMany = async (rutinas) => {
  return await Rutina.insertMany(rutinas);
};

exports.find = async () => {
  return await Rutina.find();
};


exports.findOne = async (dia) => {
  return await Rutina.findOne({ dia });
};


exports.findOneAndReplace = async (dia, nuevaRutina) => {
  return await Rutina.findOneAndReplace({ dia }, nuevaRutina);
};
//filtro
exports.updateMany = async (dia) => {
  return await Rutina.updateMany(dia);
};

exports.deleteOne = async (dia) => {

  return await Rutina.deleteOne({ dia });
};

exports.findOneAndDelete = async (dia) => {
  return await Rutina.findOneAndDelete({ dia });
};

