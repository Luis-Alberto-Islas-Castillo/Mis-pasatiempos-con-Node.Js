const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const casaSchema = new Schema({
    nombre: String,
    lema: String,
    estandarte: String
})

/*Modelo*/
const Casa = mongoose.model('Casa', casaSchema);

module.exports = Casa;