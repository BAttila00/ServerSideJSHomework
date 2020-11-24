//route:
// app.use('/athletes',
//     getAllUtvonalMW(objRepo),
//     getTurazokMW(objRepo),
//     getTopTurazokMW(objRepo),
//     checkPassMW(objRepo),
//     renderMW(objRepo, 'turazok'));

//lekéri a túrázókat és a megtett kilóméterszámukat az adatbázisból
//pontosabban ezt már lekérjük getAllUtvonalMW és getTurazokMW-ben (ezek res.locals.turazok és res.locals.turak-ra pakolnak)
// itt csak összeszámláljuk, hogy adott ember hány kilómétert tett meg

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {


        var turazokList = res.locals.turazok;
        var turakList = res.locals.turak;
        var tav = 0;
        var turazoOsszeitettTavolsaga = [];

        for (i = 0; i < turazokList.length; i++) {
            tav = 0;
            //console.log("turazokList[i]: " + turazokList[i]);
            console.log("i:" + i);
            for (j = 0; j < turakList.length; j++) {
                console.log("j:" + j);
                console.log(turazokList[i]._id + " == " + turakList[j]._turazo + "  " + ((turazokList[i]._id).toString() == (turakList[j]._turazo).toString()));
                if((turazokList[i]._id).toString() == (turakList[j]._turazo).toString()){
                    console.log("Ez turazokList[i] turaja: " + turakList[j].cim + " Tav: " + turakList[j].tav);
                    tav += turakList[j].tav;
                }
            }
            
            let egyTurazoEsTavolsaga = {
                "nev": turazokList[i].nev,
                "tav": tav
            }

            console.log("hozáadtam");
            turazoOsszeitettTavolsaga.push(egyTurazoEsTavolsaga);
        }

        res.locals.turazoOsszeitettTavolsaga = turazoOsszeitettTavolsaga;

        return next();

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
        // next();     //lehet return next() is helyette, így az alatta lévő sorok nem futnak le  !!!!!!!!!!!!!!!!!!!!!!!
    };
};
