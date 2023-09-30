const express = require('express');
const router= express.Router();

//controllers
const clientesController = require('../controller/usecases/clientes.controller');
const usuariosController = require('../controller/usecases/usuarios.controller');


//usuarios
router.get('/verusuarios', usuariosController.verUsuarios);
router.post('/registrarusuario', usuariosController.registrarUsuario);
router.put('/actualizarusuario', usuariosController.actualizarUsuario);
router.delete('/eliminarusuario', usuariosController.eliminarUsuario);



//clientes
router.get('/verclientes', clientesController.verClientes);
router.post('/registrarcliente', clientesController.registrarCliente);
router.put('/actualizarcliente', clientesController.actualizarClientes);
router.delete('/eliminarcliente', clientesController.eliminarCliente);



module.exports= router;