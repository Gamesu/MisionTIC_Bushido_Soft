
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


const cors = require('cors');
app.use(cors());

//---------------Importe de Entidades---------------------------//
const usuarioSchema = require('./models/usuario.js');
const ubicacionSchema = require('./models/ubicacion.js');
const inmuebleSchema = require('./models/inmueble.js');


app.use(express.urlencoded({extended: true}));// Usar codificacion de URL que trae express y de manera extendida
app.use(express.json());// permitir que nos ingrese informacion en formato json

router.get('/mainUbicacion.js', (req, res) => {
    //res.send("El inicio de mi API   Index login");
    //res.sendFile(path.join(__dirname +'/index.html'));
    res.writeHead(200, {'Content-Type': 'javascript:;'});
    // Se envía el archivo html al server mediante un response
    fs.createReadStream('./public/mainUbicacion.js').pipe(res);
});

router.get('/mainInmueble.js', (req, res) => {
    //res.send("El inicio de mi API   Index login");
    //res.sendFile(path.join(__dirname +'/index.html'));
    res.writeHead(200, {'Content-Type': 'javascript:;'});
    // Se envía el archivo html al server mediante un response
    fs.createReadStream('./public/mainInmueble.js').pipe(res);
});

/***********Operaciones CRUD ***************/
router.get('/', (req, res) => {
    //res.send("El inicio de mi API   Index login");
    //res.sendFile(path.join(__dirname +'/index.html'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Se envía el archivo html al server mediante un response
    fs.createReadStream('./InmuebleForm.html').pipe(res);
});

router.get('/ubicacion', (req, res) =>{
    ubicacionSchema.find(function(err, datos) {
        if (err) {
            console.log("Error leyendo los datos");
        }else{
            res.send(datos);
        }
    });
});

router.get('/ubicacion_parametro', (req, res) =>{
    ubicacionSchema.find({barrio:'El Carmen'}, (err, datos) => {
        if (err) {
            console.log("Error leyendo los datos");
        }else{
            res.send(datos);
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

app.get('/consultarApartamento', (req,res)=>{
    inmuebleSchema.find({tipo:req.query.tipo}, (err,docs) => {
        //res.send(docs);  
        res.end(JSON.stringify(docs));      
    });
    let tipo = req.query.tipo;
    console.log(tipo);
});

router.get('/inmueble', (req, res) =>{
    inmuebleSchema.find(function(err, datos) {
        if (err) {
            console.log("Error leyendo los datos");
        }else{
            res.send(datos);
        }
    });
});

router.post('/inmueble', (req, res) =>{
    ubicacionSchema.find({barrio:req.body.ubicacion}, (err, datos) => {
        if (err) {
            console.log("Error leyendo los datos");
        }else{
            let nuevoInmueble = new inmuebleSchema({
                idInmueble: req.body.idInmueble,
                tipo:req.body.tipo,
                descripcion: req.body.descripcion,
                numeroHabitaciones: req.body.numeroHabitaciones,
                numeroBanos: req.body.numeroBanos,
                precio: req.body.precio,
                imagen: req.body.imagen,
                idUbicacion: datos[0]._id
            });
            nuevoInmueble.save(function(err, datos){
                if (err) {
                    console.log(err);
                }else{
                    res.send("Inmueble almacenado correctamente");
                }
            });
        }
    });

    
});

router.post('/multi', (req, res) =>{
    num1 = req.body.num1;
    num1 = parseInt(num1, 10);
    num2 = req.body.num2;
    num2 = parseInt(num2, 10);
    resultado= num1 * num2;
    res.send("" + resultado);    
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
})

modeloUbicacion.find({barrio:'toberin'}, (err, docs) => {
  var myobj = { nombre:'apto9', tipo: 'apartacho', imagen: 'img4', ubicacion: docs[0]._id  };
  modeloInmueble.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;

  })
   console.log(docs[0]._id)
  })

  
*/