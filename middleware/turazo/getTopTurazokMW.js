//lekéri a túrázókat és a megtett kilóméterszámukat az adatbázisból

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
