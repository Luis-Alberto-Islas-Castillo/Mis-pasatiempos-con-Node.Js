const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("index",{titulo: "Inicio"})
})

router.get('/niveles',(req,res)=>{
    res.render("niveles",{tituloNiveles : "Niveles"})
})

router.get('/deidades',(req,res)=>{
    res.render("deidades",{tituloDeidades : "Deidades"})
})

router.get('/elementos',(req,res)=>{
    res.render("elementos",{tituloDeidades : "Elementos"})
})


module.exports = router;