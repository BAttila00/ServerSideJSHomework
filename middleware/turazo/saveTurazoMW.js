//getTurazoMW-ben már magyarázva -> new-nál és edit-nél is ez hívódik ha van egyed a res.locales.turazo-n akkor edit
//ha nincs akkor new és hozzunk létre egyet

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
