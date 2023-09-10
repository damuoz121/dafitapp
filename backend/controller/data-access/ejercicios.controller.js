const registrarEjercicio=require('../usecases/ejercicios.controller');
const verEjercicio=require('../usecases/ejercicios.controller');
const eliminarEjercicio = require("../usecases/ejercicios.controller");
const actualizarEjercicio = require("../useCases/editar-ejercicio");

export default function RegistrarEjercicio(){
    const existe = async function findOne(){
        return await registrarEjercicio.findOne()
    }
        //crea el objeto y lo guarda usando la funcion desacoplada de guardado 
        async function create(ejercicio){
            return   await registrarEjercicio.create(ejercicio)
        }return {
            existe,create
        }  
}

export default function VerEjercicio(_id){
    //ver los ejercicios
    async function find({}){
        return await verEjercicio.find()
    }
}

export default function ActualizarEjercicio(_id){
    //actualiza los datos del ejercicio con el id
    async function update (id){
        return await actualizarEjercicio.update(id);
    }
}

export default function EliminarEjercicio(_id){
    //elimina un ejercicio segun su ID
    async function findOneAndDelete(id){
        return await eliminarEjercicio.findOneAndDelete(id);
    }
}

module.exports={RegistrarEjercicio,VerEjercicio,ActualizarEjercicio,EliminarEjercicio};