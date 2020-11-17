//leellenőrizzük, hogy a felhasználó be van-e lépve
//ha a felh be van jelentkezve akkor next, ha nincs akkor átirányítjuk pl "lépj be" feliratú html-re


const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.session.belepve === "undefined" || req.session.belepve !== true){
            return res.redirect('/');
        }

        next();
    };
};
