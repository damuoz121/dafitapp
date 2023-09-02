const mongoose = require('../config/database');
const rutinaSchema = new mongoose.Schema({
    dia :{
        type: Number, 
        required:[true, 'requiere el dia'],
        Enum:[1,2,3,4,5,6,7,8,9,10]},
    ejercicios: {
        type: Array,
        required: [true, 'requiere ejercicios']},
})

const Rutina = mongoose.model('cliente', rutinaSchema);
module.exports = Rutina