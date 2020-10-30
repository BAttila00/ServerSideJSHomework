//töröl egy id-jával megadott túrázót az adatbázisból
//csak akkor törlünk ha létezik is, ezt leellenőrizzük ezen MW előtt pl getTurazoMW-ben


const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
