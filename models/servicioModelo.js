const express= require("express");
const {createReadStream} = require('fs')

var modelo = require('./usuario')
var modeloUbicacion = require('./ubicacion')
var modeloInmueble = require('./inmueble')



const app= new express();
const HTML_CONTENT_TYPE = 'text/html'
const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.use(express.static("public"));


const path = require("path");


require('./conexion')


 
     
app.post("/upload", (req, res) => {
  var myobj = {nombres: req.body.nombres, apellidos: req.body.apellidos, correo: req.body.correo, celular: req.body.celular, clave: req.body.clave};
  modelo.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;
})
  res.send("Datos insertados correctamente")
})


app.post("/crearUbicacion", (req, res) => {
  var myobj = {departamento: req.body.departamento, ciudad: req.body.ciudad, barrio: req.body.barrio, direccion: req.body.direccion, estrato: req.body.estrato};
  modeloUbicacion.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;
})
  res.send("Datos insertados correctamente")
})


app.post("/crearInmueble", (req, res) => {
  modeloUbicacion.find({barrio:'pinares'}, (err, docs) => {
    var myobj = { tipo: req.body.tipo, descripcion: req.body.descripcion, numeroHabitaciones: req.body.numeroHabitaciones, numeroBanos: req.body.numeroBanos, precio: req.body.precio, imagenes: req.body.imagenes, ubicacion: docs[0]._id};
    modeloInmueble.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
  })
    console.log(docs[0]._id)
  })
})


app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
 

  createReadStream('./inmueble.html').pipe(res)
   
  })


app.listen(600, () => {

  console.log("aplicacion corriendo en el puerto 600")
    
  })