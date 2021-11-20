const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const inmuebleSchema = new mongoose.Schema({
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
    id_ubicacion: {
        type: ObjectId
    }
});

module.exports = mongoose.model('inmueble', inmuebleSchema, 'inmuebles');