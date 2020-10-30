//beírt jelszó ellenőrzése, ha jó akkor -> /athletesList ha nem akkor -> /

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
