const express = require('express');
const router= express.Router();

//controllers
const clientesController = require('../controller/usecases/clientes.controller');
const usuariosController = require('../controller/usecases/usuarios.controller');
const ejerciciosController= require('../controller/usecases/ejercicios.controller');
const rutinasController= require('../controller/usecases/rutinas.controller');
const planesController= require('../controller/usecases/plan.controller');

//usuarios
router.get('/obtenerusuario', usuariosController.obtenerUsuario);
router.get('/obtenerusuarios', usuariosController.obtenerUsuarios);
router.post('/crearusuario', usuariosController.crearUsuario);
router.put('/actualizarusuario', usuariosController.actualizarUsuario);
router.delete('/eliminarusuario', usuariosController.eliminarUsuario);


//clientes
router.get('/obtenercliente', clientesController.obtenerCliente);
router.get('/obtenerclientes', clientesController.obtenerClientes);
router.post('/crearcliente', clientesController.crearCliente);
router.put('/actualizarcliente', clientesController.actualizarCliente);
router.delete('/eliminarcliente', clientesController.eliminarCliente);

//ejercicios
router.get('/obtenerejercicio', ejerciciosController.obtenerEjercicio);
router.get('/obtenerejercicios', ejerciciosController.obtenerEjercicios);
router.post('/crearjercicio', ejerciciosController.crearEjercicio);
router.put('/actualizarejercicio', ejerciciosController.actualizarEjercicio);
router.delete('/eliminarejercicio', ejerciciosController.eliminarEjercicio);

//rutinas
router.get('/obtenerrutina', rutinasController.obtenerRutina);
router.get('/obtenerrutinas', rutinasController.obtenerRutinas);
router.post('/crearrutina', rutinasController.crearRutina);
router.put('/actualizarrutina', rutinasController.actualizarRutina);
router.delete('/eliminarrutina', rutinasController.eliminarRutina);

//planes
router.get('/obtenerplan', planesController.obtenerPlan);
router.get('/obtenerplanes', planesController.obtenerPlanes);
router.post('/crearplan', planesController.crearPlan);
router.put('/actualizarplan', planesController.actualizarPlan);
router.delete('/eliminarplan', planesController.eliminarPlan);


module.exports= router;