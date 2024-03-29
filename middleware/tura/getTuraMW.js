//:routeID alapján betölt egy túrát az adatbázisból

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TuraModel = requireOption(objectrepository, 'TuraModel');

    return function (req, res, next) {
        TuraModel.findOne(
            {
                _id: req.params.routeID         //az url-ben megadott id, és innen tudjuk: app.get('/routes/:routeID'
            },
            (err, tura) => {
                if (err || !tura) {
                    return next(err);
                }

                res.locals.tura = tura;
                return next();
            }
        );
    };
};
