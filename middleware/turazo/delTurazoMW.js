//töröl egy id-jával megadott túrázót az adatbázisból
//csak akkor törlünk ha létezik is, ezt leellenőrizzük ezen MW előtt pl getTurazoMW-ben


const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.turazo === 'undefined') {
            return next();
        }

        res.locals.turazo.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/athletesList');
        });
    };
};
