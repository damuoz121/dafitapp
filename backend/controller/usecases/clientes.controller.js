const clienteDataAccess = require('../data-access/clientes.controller');

exports.validarCliente= async()=>{
  try {
    const cliente = await clienteDataAccess.findOne({ nombre: nombrecliente });

    if (!cliente) {
      console.log('Usuario no encontrado.');
      return false;
    }

    if (cliente.nombre === nombre) {
      console.log('Usuario validado con éxito.');
      return true;
    } else {
      console.log('Cliente no encontrado.');
      return false;
    }
  } catch (error) {
    console.error('Error al validar el cliente:', error);
    return false;
  }
}


// Creamos un caso de uso para crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    // Obtenemos los datos del cliente del cuerpo de la petición
    const { cedula, usuario, nombre, apellido, peso, estatura, fechadenacimiento, email, telefono, instructor } = req.body;
    // Validamos que los datos sean correctos y completos
    // Puedes usar algún paquete de validación como Joi o express-validator
    // O puedes crear tu propia función de validación
    // Aquí asumimos que hay una función llamada validarCliente que devuelve un objeto con dos propiedades: error y value
    const { error, value } = validarCliente(req.body);
    // Si hay algún error en la validación, devolvemos un código de estado 400 y el mensaje de error
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    // Si no hay error, usamos la función save del data access para guardar el nuevo cliente en la base de datos
    const nuevoCliente = await clienteDataAccess.save(cedula, usuario, nombre, apellido, peso, estatura, fechadenacimiento, email, telefono, instructor);
    // Devolvemos un código de estado 201 y el nuevo cliente creado
    return res.status(201).json({ cliente: nuevoCliente });
  } catch (err) {
    // Si ocurre algún error en el proceso, devolvemos un código de estado 500 y el mensaje de error
    return res.status(500).json({ error: err.message });
  }
};

// Creamos un caso de uso para obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    // Usamos la función find del data access para obtener todos los clientes de la base de datos
    const clientes = await clienteDataAccess.find();
    // Devolvemos un código de estado 200 y el array de clientes
    return res.status(200).json({ clientes });
  } catch (err) {
    // Si ocurre algún error en el proceso, devolvemos un código de estado 500 y el mensaje de error
    return res.status(500).json({ error: err.message });
  }
};

// Creamos un caso de uso para obtener un cliente por su cédula
exports.obtenerCliente = async (req, res) => {
  try {
    // Obtenemos la cédula del cliente del parámetro de la ruta
    const { cedula } = req.params;
    // Usamos la función findOne del data access para obtener el cliente que coincida con la cédula
    const clienteEncontrado = await clienteDataAccess.findOne(cedula);
    // Si no se encuentra ningún cliente, devolvemos un código de estado 404 y un mensaje indicando que no existe
    if (!clienteEncontrado) {
      return res.status(404).json({ error: 'No se encontró ningún cliente con esa cédula' });
    }
    // Si se encuentra el cliente, devolvemos un código de estado 200 y el cliente encontrado
    return res.status(200).json({ cliente: clienteEncontrado });
  } catch (err) {
    // Si ocurre algún error en el proceso, devolvemos un código de estado 500 y el mensaje de error
    return res.status(500).json({ error: err.message });
  }
};

// Creamos un caso de uso para actualizar un cliente por su cédula
exports.actualizarCliente = async (req, res) => {
  try {
    // Obtenemos la cédula del cliente del parámetro de la ruta
    const { cedula } = req.params;
    // Obtenemos los datos del cliente del cuerpo de la petición
    const { usuario, nombre, apellido, peso, estatura, fechadenacimiento, email, telefono, instructor } = req.body;
     // Validamos que los datos sean correctos y completos
     // Puedes usar algún paquete de validación como Joi o express-validator
     // O puedes crear tu propia función de validación
     // Aquí asumimos que hay una función llamada validarCliente que devuelve un objeto con dos propiedades: error y value
     const { error, value } = validarCliente(req.body);
     // Si hay algún error en la validación, devolvemos un código de estado 400 y el mensaje de error
     if (error) {
       return res.status(400).json({ error: error.message });
     }
    // Si no hay error, usamos la función findOneAndReplace del data access para reemplazar el cliente que coincida con la cédula por uno nuevo con los datos recibidos
    const nuevoCliente = await clienteDataAccess.findOneAndReplace(cedula, { cedula, usuario, nombre, apellido, peso, estatura, fechadenacimiento, email, telefono, instructor });
     // Si no se encuentra ningún cliente, devolvemos un código de estado 404 y un mensaje indicando que no existe
     if (!nuevoCliente) {
       return res.status(404).json({ error: 'No se encontró ningún cliente con esa cédula' });
     }
    // Si se encuentra y se reemplaza el cliente, devolvemos un código de estado 200 y el nuevo cliente creado
    return res.status(200).json({ cliente: nuevoCliente });
  } catch (err) {
    // Si ocurre algún error en el proceso, devolvemos un código de estado 500 y el mensaje de error
    return res.status(500).json({ error: err.message });
  }
};

// Creamos un caso de uso para eliminar un cliente por su cédula
exports.eliminarCliente = async (req, res) => {
  try {
    // Obtenemos la cédula del cliente del parámetro de la ruta
    const { cedula } = req.params;
    // Usamos la función findOneAndDelete del data access para eliminar el cliente que coincida con la cédula y devolverlo
    const clienteEliminado = await clienteDataAccess.findOneAndDelete(cedula);
     // Si no se encuentra ningún cliente, devolvemos un código de estado 404 y un mensaje indicando que no existe
     if (!clienteEliminado) {
       return res.status(404).json({ error: 'No se encontró ningún cliente con esa cédula' });
     }
    // Si se encuentra y se elimina el cliente, devolvemos un código de estado 200 y el cliente eliminado
    return res.status(200).json({ cliente: clienteEliminado });
  } catch (err) {
    // Si ocurre algún error en el proceso, devolvemos un código de estado 500 y el mensaje de error
    return res.status(500).json({ error: err.message });
  }
};

