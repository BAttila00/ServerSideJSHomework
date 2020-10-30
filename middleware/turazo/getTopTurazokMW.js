//lekéri a túrázókat és a megtett kilóméterszámukat az adatbázisból

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.turazok = [
            {
                _id: '001',
                nev: 'Attila',
                kor: 22,
                nem: 'Férfi',
                email: 'asdghjrtzoppő@gmial.com'
            },
            {
                _id: '002',
                nev: 'Attila II',
                kor: 25,
                nem: 'Férfi',
                email: 'kléűáuipő@gmial.com'
            }
        ];
        next();
    };
};
