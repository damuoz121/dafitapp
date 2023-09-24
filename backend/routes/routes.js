const express = require('express');

//controllers
const clientesController = require('../controller/usecases/clientes.controller');

const router= express.Router();

//clientes
router.get('/verclientes', clientesController.verClientes);
router.post('/registrarcliente', clientesController.registrarCliente);
router.delete('/eliminarcliente', clientesController.eliminarCliente);

 

module.exports= router;