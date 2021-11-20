const mongoose = require('mongoose'); // importar paquete mongoose
const usuarioSchema = new mongoose.Schema({
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    correo: {
        type: String
    },
    celular: {
        type: String
    },
    clave: {
        type: String
    }
});

module.exports = mongoose.model('usuario', usuarioSchema, 'usuarios');// exportar estructura al exterior