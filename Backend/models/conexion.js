const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://admin_root:admin_root@webprojectcluster.zvgzk.mongodb.net/ProjectDatabase?retryWrites=true&w=majority'

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("mongodb esta conectado")
}).catch((err) => {
    console.log("mongodb no esta conectado")
    console.log(err)
})