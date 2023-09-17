const usuario= require('../data-access/usuarios.controller');

const usuarioController=  {};

function registrarUsuario(){
    async (req, res) => {
        try {
          const ejercicioNuevo = new ejercicio({
            usuario: req.body.usuario,
            password: req.body.password,
            rol:req.body.rol
          });
          await usuarioNuevo.save();
          console.log("usuario registrado exitosamente");
        } catch (error) {
          console.error(error);
          res.send("Error al registrar el usuario");
        }
      };
}

function VerUsuario(){
  async function verUsuario() {
    try{
      let usuario =await usuario.find({});
      console.log('usuario',usuario[0]);
      return ejercicio;
    }catch(error){
    console.log(`Error ${error}`);
  }
}
}

function ActualizarUsuario(){
  async function actualizarUsuario(id, body) {
    try {
      let usuarioActualizado = await usuario.findByIdAndUpdate( id , body,{new : true});
      console.log('actualizado',usuarioActualizado );
      return usuarioActualizado ;
      }catch{
        console.log(`${error}`)
        }}
      }
    


function EliminarUsuario(){
  //eliminar cliente
  async  function eliminarUsuario(_id ) {
    try {
      let ejercicioUsuario= await usuario.findOneAndDelete({_id:_id})
      console.log('Eliminado',usuarioEliminado._id);
      return usuarioEliminado;
    }catch( error ){console.log (`${error}`)}
    }
}

module.exports= usuarioController;