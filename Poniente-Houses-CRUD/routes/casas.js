const e = require('express');
const express = require('express');
const router = express.Router();

const Casa = require('../models/casas')

/*Mostrar Registros de BD*/
router.get('/', async (req, res) => {
    try {
        const arrayCasas = await Casa.find()
        console.log(arrayCasas)

        res.render("casas", {
            arrayCasas: arrayCasas
        })
    } catch (error) {
        console.log(error)
    }
})

/*Pestaña Crear*/
router.get('/crear', (req, res) => {
    res.render('crear')
})

/*Insersion de datos en BD*/
router.post('/', async (req, res) => {
    const body = req.body
    try {
        const casaDB = new Casa(body)
        await casaDB.save()
        res.redirect('/casas')
    } catch (error) {
        console.log(error)
    }
})

/*Detalles de Registros*/
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const casaDB = await Casa.findOne({ _id: id })
        console.log(casaDB)

        res.render('detalle', {
            casa: casaDB,
            error: false
        })
    } catch (error){
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: "No se encuentra el id seleccionado"
        })
    }
})

/*Eliminar Registro*/
router.delete('/:id', async(req, res)=> {
    const id = req.params.id
    try {
        const casaDB = await Casa.findOneAndDelete({_id:id})
        if(casaDB){
            res.json({estado:true,mensaje: 'eliminado'})
        }else{
            res.json({estado:false,mensaje: 'fallo eliminar'})
        }
    } catch (error) {
        console.log(error);
    }
})

/* Editar campos */
router.put('/:id',async (req, res) =>{
    const id = req.params.id
    const body = req.body
    try {
        const casaDB = await Casa.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(casaDB)

        res.json({
            estado: true,
            mensaje: 'Campo Editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Error al editar el campo'
        })
    }
})
module.exports = router;