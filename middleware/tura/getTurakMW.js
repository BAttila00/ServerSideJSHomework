//egy adott túrázó útvonalait tölti be

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TuraModel = requireOption(objectrepository, 'TuraModel');

    return function (req, res, next) {

        TuraModel.find({_turazo: res.locals.turazo._id}, (err, turak) => {
            if (err) {
                return next(err);
            }

            res.locals.turak = turak;
            return next();
        });

    };
};
