//lefut amikor a főoldalról a dropdown-al kiválasztjuk az útvonalakat. Betölti az összeset az adatbázisból

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
