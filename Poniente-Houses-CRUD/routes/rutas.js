const express = require('express');
const router = express.Router();

/*Ruta Principal*/
router.get('/',(req,res)=>{
    res.render("index",{titulo : "Titulo"})
})

/*Ruta Secundaria*/
router.get('/favorita',(req,res)=>{
    res.render("favorita",{titulo : "Mi casa Fvorita"})
})

module.exports = router;