//a módosításnál és az újnál is ezt hívjuk, előbb ellenőrizzük, hogy a túra meg lett-e adva post-ban
//ha nem akkor new és létre hozzuk, ha igen akkor edit és módosítjuk

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TuraModel = requireOption(objectrepository, 'TuraModel');

    return function (req, res, next) {
        if (
            typeof req.body.cim === 'undefined' ||
            typeof req.body.tav === 'undefined' ||
            typeof req.body.descr === 'undefined' ||
            typeof req.body.longdescr === 'undefined' ||
            typeof res.locals.turazo === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.tura === 'undefined') {
            res.locals.tura = new TuraModel();
        }

        if (Number.isNaN(parseInt(req.body.tav, 10))) {
            return next(new Error('Táv számmal kell hogy megadva legyen!'));
        }

        res.locals.tura.cim = req.body.cim;
        res.locals.tura.tav = parseInt(req.body.tav, 10);
        res.locals.tura.rovidLeiras = req.body.descr;
        res.locals.tura.hoszabbLeiras = req.body.longdescr;
        res.locals.tura._turazo = res.locals.turazo._id;

        res.locals.tura.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/route/${res.locals.turazo._id}`);
        });
    };
};