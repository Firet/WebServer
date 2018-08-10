const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;

app.use(cors())
const usuarios = require("./data/usuarios.json")

app.get('/usuarios', (req, res) => res.send(usuarios))



// Connection URL
const url = 'mongodb://ws:53yer64trw23542s@ds117422.mlab.com:17422/clasesprog';
console.log("Conectando a mlab...")
MongoClient.connect(url, function(err, client) {
    if(!err){
        console.log("Conectado!")
        app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000!'))
    }else{
        console.log("Imposible conectar con mlab")
    }
});