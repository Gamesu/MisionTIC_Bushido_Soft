const mongoose = require('mongoose');
const ubicacionSchema = new mongoose.Schema({
    departamento: {
        type: String
    },
    ciudad: {
        type: String
    },
    barrio: {
        type: String
    },
    direccion: {
        type: String
    },
    estrato: {
        type: String
    }
});

module.exports = mongoose.model('ubicacion', ubicacionSchema, 'ubicaciones');