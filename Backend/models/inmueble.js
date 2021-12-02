const { ObjectId } = require("bson");
const mongoose = require('mongoose');
const inmuebleSchema = new mongoose.Schema({
    idInmueble: {
        type: Number
    },
    tipo: {
        type: String
    },
    descripcion: {
        type: String
    },
    numeroHabitaciones: {
        type: String
    },
    numeroBanos: {
        type: String
    },
    precio: {
        type: String
    },
    imagen: {
        type: String
    },
    idUbicacion: {
        type: ObjectId
    }
});

module.exports = mongoose.model('inmueble', inmuebleSchema, 'Inmuebles');