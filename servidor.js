
console.log("Inicio de programa, Ejecucion: node servidor.js")
/*Instalacion de paquetes
npm install express --save   // permite lanzar de manera rapida el servidor
npm install mongoose --save  // permite definir conexion a BD
*/
const express = require('express');// uso de paquete express
const router = express.Router(); // ruta para dar puerta de entrada al usuario a las funcionalidades

const app = express(); // instancia de express para poder inicializar el servidor app es mi servidor, expres es el costructor a o clase
const conexion = require('./models/conexion');// conexion a BD

const path = require('path');
const fs = require('fs');

//---------------Importe de Entidades---------------------------//
const usuarioSchema = require('./models/usuario.js');
const ubicacionSchema = require('./models/ubicacion.js');
const inmuebleSchema = require('./models/inmueble.js');


app.use(express.urlencoded({extended: true}));// Usar codificacion de URL que trae express y de manera extendida
app.use(express.json());// permitir que nos ingrese informacion en formato json

router.get('/main.js', (req, res) => {
    //res.send("El inicio de mi API   Index login");
    //res.sendFile(path.join(__dirname +'/index.html'));
    res.writeHead(200, {'Content-Type': 'javascript:;'});
    // Se envía el archivo html al server mediante un response
    fs.createReadStream('./public/main.js').pipe(res);
});

/***********Operaciones CRUD ***************/
router.get('/', (req, res) => {
    //res.send("El inicio de mi API   Index login");
    //res.sendFile(path.join(__dirname +'/index.html'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Se envía el archivo html al server mediante un response
    fs.createReadStream('./index.html').pipe(res);
});

router.get('/ubicacion', (req, res) =>{
    ubicacionSchema.find(function(err, datos) {
        if (err) {
            console.log("Error leyendo los datos" + err);
        }else{
            res,send(datos);
        }
    });
});

router.post('/ubicacion', (req, res) =>{
    let nuevaUbicacion = new ubicacionSchema({
        idUbicacion: req.body.idUbicacion,
        departamento:req.body.departamento,
        ciudad: req.body.ciudad,
        barrio: req.body.barrio,
        direccion: req.body.direccion,
        estrato: req.body.estrato
    });
    nuevaUbicacion.save(function(err, datos){
        if (err) {
            console.log(err);
        }else{
            res.send("Ubicacion almacenada correctamente");
        }
    });
});


app.use(router);// usar las rutas creadas en nuestro servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});


/*const modelo = require('./models/usuario')

require('./models/conexion')

// Add register
var myObj = {
    cedula: "79654658",
    nombre: "Gustavo",
    clave: "123456"
}
modelo.collection.insertOne(myObj, (err, res) => {
    if(err) throw err
    console.log("1 document inserted")
})

// list register
modelo.find({}, (err, data) => {
    console.log(data)
})*/