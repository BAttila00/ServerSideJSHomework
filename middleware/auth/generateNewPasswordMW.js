//elfelejtett jelszó esetén fogjuk lefuttatni, generálunk egy új jelszót a usernek

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
