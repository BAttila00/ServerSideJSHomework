//getTurazoMW-ben már magyarázva -> new-nál és edit-nél is ez hívódik ha van egyed a res.locales.turazo-n akkor edit
//ha nincs akkor new és hozzunk létre egyet

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TurazoModel = requireOption(objectrepository, 'TurazoModel');

    return function (req, res, next) {

        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.eletkor === 'undefined') ||
            (typeof req.body.nem === 'undefined') ||
            (typeof req.body.email === 'undefined')) {
            return next();
        }

        if (typeof res.locals.turazo === 'undefined') {     //ez azért kell, mert editnél és új létrehozásánál is ez a MW fut le, csak editnél már van egyed létrehozásnál pedig még nincs
            res.locals.turazo = new TurazoModel();
        }

        res.locals.turazo.nev = req.body.nev;           //ezek(req) a turazoEditNew.ejs post küldéséből jönnek föl
        res.locals.turazo.eletkor = req.body.eletkor;
        res.locals.turazo.nem = req.body.nem;
        res.locals.turazo.email = req.body.email;

        res.locals.turazo.save(err => {
            if (err) {
                return next(err);
            }

            console.log(req.body);
            return res.redirect('/athletesList');
        });


    };
};
