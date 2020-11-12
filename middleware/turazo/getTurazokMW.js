//betölti a túrázókat az adatbázisból

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TurazoModel = requireOption(objectrepository, 'TurazoModel');

    return function (req, res, next) {

        TurazoModel.find({}, (err, turazok) => {
            if (err) {
                return next(err);
            }

            res.locals.turazok = turazok;
            return next();
        });

        // res.locals.turazok = [
        //     {
        //         _id: '001',
        //         nev: 'Attila',
        //         kor: 22,
        //         nem: 'Férfi',
        //         email: 'asdghjrtzoppő@gmial.com'
        //     },
        //     {
        //         _id: '002',
        //         nev: 'Attila II',
        //         kor: 25,
        //         nem: 'Férfi',
        //         email: 'kléűáuipő@gmial.com'
        //     }
        // ];
        // next();         //lehet return next() is helyette, így az alatta lévő sorok nem futnak le
    };
};
