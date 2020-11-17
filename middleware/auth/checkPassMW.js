//beírt jelszó ellenőrzése, ha jó akkor -> /athletesList ha nem akkor -> /

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'asdfgh') {
            req.session.belepve = true;
            return req.session.save((err) => {

                return res.redirect('/athletesList');
            })
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};
