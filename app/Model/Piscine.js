const mongoose = require('../database/mongo_database')

const piscineSchema = mongoose.Schema({
    id: Number,
    nom: String,
    adresse: String,
    tel: String
})

const Piscine = mongoose.model('Piscine', piscineSchema)

module.exports = Piscine;