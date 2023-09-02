const mongoose = require('../config/database');
const instructorSchema = new mongoose.Schema({
    cedula: {
        type: String,
        required: [true, 'La cédula del instructor es obligatoria'],
        unique: [true, 'Esta cédula ya se encuentra registrada'],
        minlength: [7, 'La cédula debe tener al menos 7 dígitos'],
        maxlength: [10, 'La cédula no puede tener más de 10 dígitos']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del instructor es obligatorio'],
        minlength: [2, 'El nombre debe tener al menos 2 letras'],
        maxlength: [30, 'El nombre no puede tener más de 30 letras']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido del instructor es obligatorio'],
        minlength: [2, 'El apellido debe tener al menos 2 letras'],
        maxlength: [30, 'El apellido no puede tener más de 30 letras']
    },
    fechadenacimiento: {
        type: Date,
        required: [true, 'La fecha de nacimiento del instructor es obligatoria']
    },
    email: {
        type: String,
        required: [true, 'El email del instructor es obligatorio'],
        unique: [true, 'Este email ya se encuentra registrado'],
        minlength: [6, 'El email debe tener al menos 6 caracteres'],
        maxlength: [100, 'El email no puede tener más de 100 caracteres']
    },
    telefono: {
        type: String,
        required: [true, 'El número de teléfono del instructor es obligatorio'],
        minlength: [10, 'El número de teléfono debe tener al menos 10 dígitos'],
        maxlength: [10, 'El número de teléfono no puede tener más de 10 dígitos']
    }
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;