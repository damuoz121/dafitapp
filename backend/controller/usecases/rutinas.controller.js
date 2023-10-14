const rutinaDataAccess = require('../data-access/rutinas.controller');


exports.validarRutina= async()=>{
    try {
      const rutina = await rutinaDataAccess.findOne({ dia: dia });
  
      if (!rutina) {
        console.log('Rutina no encontrada.');
        return false;
      }
  
      if (rutina.dia === dia) {
        console.log('Rutina validado con éxito.');
        return true;
      } else {
        console.log('Rutina no encontrado.');
        return false;
      }
    } catch (error) {
      console.error('Error al validar la rutina:', error);
      return false;
    }
  }
exports.crearRutina = async (req, res) => {
  try {

    const { dia, ejercicios } = req.body;

    const { error, value } = validarRutina(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const nuevaRutina = await rutinaDataAccess.save(dia, ejercicios);
    return res.status(201).json({ rutina: nuevaRutina });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.obtenerRutinas = async (req, res) => {
  try {
    const rutinas = await rutinaDataAccess.find();
    return res.status(200).json({ rutinas });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.obtenerRutina = async (req, res) => {
  try {
    const { dia } = req.params;

    const rutinaEncontrada = await rutinaDataAccess.findOne(dia);
    if (!rutinaEncontrada) {
      return res.status(404).json({ error: 'No se encontró ninguna rutina para ese día' });
    }
    return res.status(200).json({ rutina: rutinaEncontrada });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.actualizarRutina = async (req, res) => {
  try {
    const { dia } = req.params;
    const { ejercicios } = req.body;

     const { error, value } = validarRutina(req.body);
     if (error) {
       return res.status(400).json({ error: error.message });
     }
    const nuevaRutina = await rutinaDataAccess.findOneAndReplace(dia, { dia, ejercicios });
     if (!nuevaRutina) {
       return res.status(404).json({ error: 'No se encontró ninguna rutina para ese día' });
     }
    return res.status(200).json({ rutina: nuevaRutina });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.eliminarRutina = async (req, res) => {
  try {
    const { dia } = req.params;
    const rutinaEliminada = await rutinaDataAccess.findOneAndDelete(dia);
     if (!rutinaEliminada) {
       return res.status(404).json({ error: 'No se encontró ninguna rutina para ese día' });
     }
    return res.status(200).json({ rutina: rutinaEliminada });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
