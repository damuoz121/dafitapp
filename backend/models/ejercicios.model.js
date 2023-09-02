const mongoose = require('../config/database');
const ejercicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del ejercicio es obligatorio'],
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [50, 'El nombre no puede tener más de 50 caracteres']
    },
    dificultad: {
        type: Number,
        required: [true, 'La dificultad del ejercicio es obligatoria'],
        enum: [1, 2, 3]
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del ejercicio es obligatoria'],
        minlength: [10, 'La descripción debe tener al menos 10 caracteres']
    },
    musculatura: {
        type: String,
        required: [true, 'La musculatura trabajada es obligatoria']
    }
});

const Ejercicio = mongoose.model('Ejercicio', ejercicioSchema);

module.exports = Ejercicio;