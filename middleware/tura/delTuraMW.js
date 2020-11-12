//töröljük a megadott túrát az adatbázisból (itt csak a törlés történik, 
//mert ha ide eljutottunk akkor már leelenőriztük, hogy létezik-e)

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.tura === 'undefined') {
            return next();
        }

        res.locals.tura.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/route/${res.locals.turazo._id}`);
        });
    };
};
