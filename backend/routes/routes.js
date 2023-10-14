const express = require('express');
const router= express.Router();

//usuario
/**
 *@swagger
 *  components:
 *  schemas:
 *      Usuario:
 *          type: object
 *          properties:
 *              usuario:
 *                  type: string
 *                  description: El usuario es el identificador del usuario
 *              password:
 *                  type: string
 *                  description: El password es la contraseña unica del usuario
 *              rol:
 *                  type: string
 *                  description: El rol es lo que determina los permisos del usuario
 *          required:
 *              -usuario
 *              -password
 *              -rol
 *          example:
 *              usuario: Usuario1
 *              password: password1
 *              rol: cliente
 */

 /**
 * @swagger
 * /api/v1/crearusuario:
 *  post:
 *    summary: create a user
 *    tags: [Usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: create a user!
 */
/**
 * @swagger
 * /api/v1/obtenerusuarios:
 *  get:
 *    summary: get users
 *    tags: [Usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: get all users!
 */
/**
 * @swagger
 * /api/v1/actualizarusuario:
 *  put:
 *    summary: update users
 *    tags: [Usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: update a user!
 */
/**
 * @swagger
 * /api/v1/eliminarusuarios:
 *  delete:
 *    summary: delete users
 *    tags: [Usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: delete all users!
 */

//cliente
/**
 *@swagger
 *  components:
 *  schemas:
 *      Cliente:
 *          type: object
 *          properties:
 *              cedula:
 *                  type: string
 *                  description: id del cliente
 *              usuario:
 *                  type: moongose.Schema.Types.ObjectId
 *                  description: El password es la contraseña unica del usuario
 *              nombre:
 *                  type: string
 *                  description: el nombre del cliente
 *              apellido:
 *                  type: string
 *                  description: el apellido del cliente
 *              fechadenacimiento:
 *                  type: date
 *                  description: fecha de nacimiento
 *              email:
 *                  type: string
 *                  description: el email del cliente
 *              telefono:
 *                  type: string
 *                  description: el telefono del cliente
 *          required:
 *              -cedula
 *              -usuario
 *              -nombre
 *              -apellido
 *              -fechadenacimiento
 *              -email
 *              -telefono
 *          example:
 *              cedula: 0101011001
 *              usuario: danielitom
 *              nombre: Daniel
 *              apellido: Munoz
 *              fechadenacimiento: 1996-01-06
 *              email: danielito@mail.com
 *              telefono: 3010303030
 */
 /**
 * @swagger
 * /api/v1/crearcliente:
 *  post:
 *    summary: create a cliente
 *    tags: [Cliente]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      200:
 *        description: create a client!
 */
/**
 * @swagger
 * /api/v1/obtenerclientes:
 *  get:
 *    summary: get clients
 *    tags: [Cliente]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Clientes'
 *    responses:
 *      200:
 *        description: get all clients!
 */
/**
 * @swagger
 * /api/v1/actualizarcliente:
 *  put:
 *    summary: update clients
 *    tags: [Cliente]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Clientes'
 *    responses:
 *      200:
 *        description: update client!
 */
/**
 * @swagger
 * /api/v1/eliminarcliente:
 *  delete:
 *    summary: delete client
 *    tags: [Cliente]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Clientes'
 *    responses:
 *      200:
 *        description: delete client!
 */
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