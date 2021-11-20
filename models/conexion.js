const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://prog_web:prueba123@clusterprogweb.cxelg.mongodb.net/Inmobiliaria?retryWrites=true&w=majority'

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("mongodb esta conectado")
}).catch((err) => {
    console.log("mongodb no esta conectado")
    console.log(err)
})