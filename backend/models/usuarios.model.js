const mongoose = require('../config/database');
const usuarioSchema = new mongoose.Schema({
    usuario :{
        type: String,
        required: [true, 'se requiere el usuario'],
        unique:[true, 'este usuario ya se encuentra registrado'],
        minLength:[7, 'los usuarios tienen mas de 7 digitos'],
        maxLength:[100, 'los usuarios tienen maximo 100 digitos']},

    password: {
        type: String,
        required: [true, 'se requiere el password'],
        minLength:[4, 'los usuarios tienen mas de 4 caracteres'],
        maxLength:[30, 'los password tienen maximo 30 caracteres']},

    rol: {
        type: String,
        }
})

const Usuario = mongoose.model('usuario', usuarioSchema);
module.exports = Usuario