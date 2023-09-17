const ejercicio= require('../data-access/ejercicios.controller');

const ejercicioController=  {};

function registrarEjercicio(){
    async (req, res) => {
        try {
          const ejercicioNuevo = new ejercicio({
            nombre: req.body.nombre,
            dificultad: req.body.dificultad,
            descripcion:req.body.descripcion,
            musculatura:req.body.descripcion
          });
          await ejercicioNuevo.save();
          console.log("Ejercicio registrado exitosamente");
        } catch (error) {
          console.error(error);
          res.send("Error al registrar el ejercicio");
        }
      };
}

function VerEjercicio(){
  async function verEjercicio() {
    try{
      let ejercicio =await ejercicio.find({});
      console.log('ejercicio',ejercicio[0]);
      return ejercicio;
    }catch(error){
    console.log(`Error ${error}`);
  }
}
}

function ActualizarEjercicio(){
  async function actualizarEjercicio(id, body) {
    try {
      let ejercicioActualizado = await ejercicio.findByIdAndUpdate( id , body,{new : true});
      console.log('actualizado',ejercicioActualizado );
      return ejercicioActualizado ;
      }catch{
        console.log(`${error}`)
        }}
      }
    


function EliminarEjercicio(){
  //eliminar cliente
  async  function eliminarEjercicio(_id ) {
    try {
      let ejercicioEliminado= await ejercicio.findOneAndDelete({_id:_id})
      console.log('Eliminado',ejercicioEliminado._id);
      return ejercicioEliminado;
    }catch( error ){console.log (`${error}`)}
    }
}

module.exports= ejercicioController;