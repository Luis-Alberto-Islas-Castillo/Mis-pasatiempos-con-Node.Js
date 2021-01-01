const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('dotenv').config()

const port = process.env.PORT || 3000;

/*Conexion a Base de Datos*/
const mongoose = require('mongoose');

const uri ='mongodb://localhost:27017/poniente';

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos Conectada'))
    .catch(e => console.log('Error de Conexion', e))

/* Motor de Plantilla */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

/*llamando a las rutas del proyecto*/
app.use('/', require('./routes/rutas'));
app.use('/casas', require('./routes/casas'));

/*Modulo de error 404*/
app.use((req, res) => {
    res.status(404).render("404", {
        titulo: "Error 404",
        descripcion: "Pagina no encontrada"
    })
})

/*Ejecutando Servidor*/
app.listen(port, () => {
    console.log("Ejecutando Servidor")
})

