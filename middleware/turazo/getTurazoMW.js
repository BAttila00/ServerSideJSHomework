//id alapján bekéri a túrázót és rátesz pl res.locales.turazo-ra amit a későbbi middleware-k innen ki tudnak olvasni
//ezt a res.locales.turazo-t fogja leelenőrinzni a saveTurazo és ha nincs itt semmi akkor nyilván újat kell létrehozni, ha nem üres
//akkor meg edit-ben vagyunk

//amennyiben nincs adott id-jű túrázó az adatbázisban átirányít -> /athletesList

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TurazoModel = requireOption(objectrepository, 'TurazoModel');

    return function (req, res, next) {

        TurazoModel.findOne({ _id: req.params.athleteID },      //athleteID a route index.js-ből jön
            (err, turazo) => {
                if (err || !turazo) {
                    return next(err);
                }

                res.locals.turazo = turazo;
                return next();
            });

        // res.locals.turazo =
        //     {
        //         _id: '001',
        //         nev: 'Attila',
        //         kor: 22,
        //         nem: 'Férfi',
        //         email: 'asdghjrtzoppő@gmial.com'
        //     };


        // next();
    };
};
