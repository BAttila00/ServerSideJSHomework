const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Turazo = db.model('Turazo', {
    nev: String,
    eletkor: Number,
    nem: String,
    email: String,
});

module.exports = Turazo;