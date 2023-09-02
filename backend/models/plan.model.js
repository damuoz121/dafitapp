const mongoose = require('../config/database');
const planSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del plan es obligatorio'],
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [50, 'El nombre no puede tener más de 50 caracteres']
    },
    frecuencia: {
        type: Number,
        required: [true, 'La frecuencia del plan es obligatoria'],
        enum: [1, 2, 3]
    },
    dificultad: {
        type: Number,
        required: [true, 'La dificultad del plan es obligatoria'],
        enum: [1, 2, 3] 
    },
    objetivo: {
        type: String,
        required: [true, 'El objetivo del plan es obligatorio']
    },
    rutinas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rutina'
    }]
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;