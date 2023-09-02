function RegistrarCliente(){
    async (req, res) => {
        try {
          const clienteNuevo = new cliente({
            cedula:req.body.cedula,
            usuario: req.body.usuario,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            peso: req.body.peso,
            estatura: req.body.estatura,
            fechadenacimiento: req.body.fechadenacimiento,
            email: req.body.email,
            telefono: req.body.telefono,
            instructor: req.body.instructor
          });
          await clienteNuevo.save();
          console.log("Cliente egistrado exitosamente");
        } catch (error) {
          console.error(error);
          console.log("Error al registrar el cliente");
        }
      };
}

function ActualizarCliente(){

}

function EliminarCliente(){
    
}