const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Tura = db.model('Tura', {
    cim: String,
    tav: Number,
    rovidLeiras: String,
    hoszabbLeiras: String,
    _turazo: {
        type: Schema.Types.ObjectId,
        ref: 'Turazo'
    }
});

module.exports = Tura;