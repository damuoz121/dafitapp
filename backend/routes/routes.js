const express = require('express');
const router= express.Router();
const clientes= require('../models/clientes.model');
const plans= require('../models/plan.model');
const ejercicios= require('../models/ejercicios.model');

//controllers
const clientesController = require('../controller/usecases/clientes.controller');
const ejerciciosController= require('../controller/usecases/ejercicios.controller');
const planesController= require('../controller/usecases/plan.controller');


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

//planes
router.get('/obtenerplan', planesController.obtenerPlan);
router.get('/obtenerplanes', planesController.obtenerPlanes);
router.post('/crearplan', planesController.crearPlan);
router.put('/actualizarplan', planesController.actualizarPlan);
router.delete('/eliminarplan', planesController.eliminarPlan);

//pages
//inicio
router.get('/inicio', (req,res)=>{
    res.render('pages/inicio')
    });
router.get('/sobrenosotros', (req,res)=>{
    res.render('pages/sobrenosotros')
    });
router.get("/recuperar", function (req, res) {
    res.render("pages/recuperar");
    })
router.get("/ejercicios", async (req, res) => {
    const listaejercicios = await ejercicios.find();
    res.render("pages/ejercicios", { listaejercicios });
    });
router.get("/planes", async (req, res) => {
    const listaplanes = await plans.find();
    res.render("pages/planes", { listaplanes });
    });

//Iniciar sesion ruta
router.get('/login', (req,res)=>{
    res.render('pages/login')
    });
router.get("/recuperar", (req, res) =>{
    res.render("pages/recuperar");
    })

//Registrar ruta
router.get('/signup', (req,res)=>{
    res.render('pages/signup')
    });
router.post('/signup', clientesController.crearCliente)

//Perfiles
router.get('/admindashboard', (req,res)=>{
    res.render('pages/admindashboard')
    });
router.get('/usuariodashboard', (req,res)=>{
    res.render('pages/usuariodashboard')
    });

//Listas
router.get("/listaclientes", async (req, res) => {
    const listaclientes = await clientes.find();
    res.render("pages/listas/listaclientes", { listaclientes });
    });
router.get("/listaplan", async (req, res) => {
    const listaplan = await plan.find();
    res.render("pages/listas/listaplanes", { listaplan });
    });
router.get("/listaejercicios", async (req, res) => {
    const listaejercicios = await ejercicios.find();
    res.render("pages/listas/listaejercicios", { listaejercicios });
    });

//Controlador ejercicio
router.get("/registroejercicio", (req, res)=>{
    res.render("pages/registroejercicios");
    })
router.get("/registrousuarioadmin", (req, res)=>{
    res.render("pages/registrousuarioadmin");
    })


router.get("/ejercicios", async (req, res) => {
    const listaejercicios = await ejercicios.find();
    res.render("pages/ejercicios", { listaejercicios });
    });
router.get("/planes", async (req, res) => {
    const listaplanes = await plans.find();
    res.render("pages/planes", { listaplanes });
    });



//controlador ejercicio
router.post('/registrojercicio', ejerciciosController.crearEjercicio);

//post
router.post("/registroejercicio", async (req, res) => {
    try {
        const nuevoEjercicio = new ejercicios({
            nombre: req.body.nombre,
            dificultad: req.body.dificultad,
            descripcion: req.body.descripcion,
            musculo_principal: req.body.musculo_principal
        });
    await nuevoEjercicio.save();
        res.redirect("/api/v1/admindashboard");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al registrar el ejercicio");
        }
      });


router.post('/signup', clientesController.crearCliente)



router.get('/registroplan',(req, res)=>{
    res.render("pages/registroplanes");
    })
router.post("/registroplan", async (req, res) => {
    try {
        const nuevoPlan = new plans({
            nombre: req.body.nombre,
            dificultad: req.body.dificultad,
            objetivo: req.body.objetivo,
            });
    await nuevoPlan.save();
        console.log('Registro exitoso');
        res.redirect('/api/v1/admindashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al registrar el plan");
                    }
    });


router.post("/login", async (req, res) => {
    const { email, password } = req.body; // Suponiendo que los datos se envían mediante un formulario
    try {
        // Lógica de autenticación para verificar el usuario y contraseña
        const isCliente = await clientes.findOne({ email, password });
    
        // Verificar si es un administrador
        const isAdmin = (email === 'admindafitapp@dafit.com' && password === 'admindafit');
    
        if (isAdmin) {
            res.redirect('/api/v1/admindashboard'); // Redirige a la vista de administrador si las credenciales coinciden
        } else if (isCliente) {
            res.redirect('/api/v1/usuariodashboard'); // Redirige a la vista de usuario normal si las credenciales coinciden
        } else {
            // En caso de que no se cumplan las condiciones anteriores, se puede redirigir a una página de error o mostrar un mensaje de credenciales inválidas
            res.redirect('/api/v1/login'); // Redirige a una página de error o manejo de credenciales inválidas
        }
        } catch (error) {
            // Manejar cualquier error que ocurra durante la consulta a la base de datos
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
});
    

module.exports= router;