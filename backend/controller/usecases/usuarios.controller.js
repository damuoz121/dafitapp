const usuario= require('../../models/usuarios.model');
usuariosController={}

function RegistrarUsuario(){
    async (req, res) => {
        try {
          const usuarioNuevo = new usuario({
            usuario: req.body.usuario,
            password: req.body.password,
            rol: req.body.rol
          });
          await usuarioNuevo.save();
          console.log("Cliente egistrado exitosamente");
        } catch (error) {
          console.error(error);
          res.send("Error al registrar el cliente");
        }
      };
}

function VerUsuario(){

}

function ActualizarUsuario(){

}

function EliminarUsuario(){
    
}

module.exports= usuariosController