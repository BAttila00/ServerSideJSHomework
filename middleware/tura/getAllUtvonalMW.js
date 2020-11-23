//lefut amikor a főoldalról a dropdown-al kiválasztjuk az útvonalakat. Betölti az összeset az adatbázisból

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TuraModel = requireOption(objectrepository, 'TuraModel');

    return function (req, res, next) {
        TuraModel.find((err, turak) => {
            if (err) {
                return next(err);
            }

            res.locals.turak = turak;
            return next();
        });
    };
};
