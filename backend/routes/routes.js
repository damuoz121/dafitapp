const express = require('express');

//controllers
const clientesController = require('../controller/usecases/clientes.controller');
const usuariosController = require('../controller/usecases/usuarios.controller');
const instructoresController = require('../controller/usecases/instructores.controller');
const rutinasController = require('../controller/usecases/rutinas.controller');
const ejerciciosController = require('../controller/usecases/ejercicios.controller');
const planController = require('../controller/usecases/plan.controller');

//clientes
router.get('/', clientesController.VerCliente);
router.post('/', clientesController.RegistrarCliente);
router.put('/', clientesController.ActualizarCliente);
router.delete('/', clientesController.EliminarCliente);
//usuarios
router.get('/', usuariosController.VerUsuario);
router.post('/', usuariosController.RegistrarUsuario);
router.put('/', usuariosController.ActualizarUsuario);
router.delete('/', usuariosController.EliminarUsuario);

const router= express.Router();

module.exports= router;