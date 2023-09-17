const cliente= require('../data-access/clientes.controller');

const clientesController=  {};

function registrarCliente(){
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
          res.send("Error al registrar el cliente");
        }
      };
}

function VerCliente(){
  async function verCliente() {
    try{
      let client =await cliente.find({});
      console.log('cliente',cliente[0]);
      return cliente;
    }catch(error){
    console.log(`Error ${error}`);
  }
}
}

function ActualizarCliente(){
  async function actualizarCliente(id, body) {
    try {
      let clienteActualizado = await cliente.findByIdAndUpdate( id , body,{new : true});
      console.log('actualizado',clienteActualizado );
      return clienteActualizado ;
      }catch{
        console.log(`${error}`)
        }}
      }
    


function EliminarCliente(){
  //eliminar cliente
  async  function eliminarCliente(_id ) {
    try {
      let deletedClient= await cliente.findOneAndDelete({_id:_id})
      console.log('Eliminado',deletedClient._id);
      return deletedClient;
    }catch( error ){console.log (`${error}`)}
    }

    
}

module.exports= clientesController;