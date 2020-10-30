//a módosításnál és az újnál is ezt hívjuk, előbb ellenőrizzük, hogy a túra meg lett-e adva post-ban
//ha nem akkor new és létre hozzuk, ha igen akkor edit és módosítjuk

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};