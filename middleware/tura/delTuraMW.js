//töröljük a megadott túrát az adatbázisból (itt csak a törlés történik, 
//mert ha ide eljutottunk akkor már leelenőriztük, hogy létezik-e)

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
