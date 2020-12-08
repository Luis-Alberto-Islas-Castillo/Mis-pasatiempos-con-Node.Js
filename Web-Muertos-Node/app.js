const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/rutas'));

app.use((req, res)=>{
    res.status(404).render("404",{
        titulo: "Error 404",
        descripcion: "Pagina no encontrada"
    })
})

app.listen(port, ()=>{
    console.log("Ejecutando servidor");
})