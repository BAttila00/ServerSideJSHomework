//getTurazoMW-ben már magyarázva -> new-nál és edit-nél is ez hívódik ha van egyed a res.locales.turazo-n akkor edit
//ha nincs akkor new és hozzunk létre egyet

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.eletkor === 'undefined') ||
            (typeof req.body.nem === 'undefined') ||
            (typeof req.body.email === 'undefined')) {
            return next();
        }

        // TODO: update item, save to db, or create new item
        console.log(req.body);
        return res.redirect('/athletesList');

    };
};
