var expect = require('chai').expect;
var getTuraMW = require('../../../../middleware/tura/getTuraMW');

describe('getTuraMW middleware ', function () {

  //a test scene
  it('should "routeID alapján betölt egy túrát az adatbázisból és res.locals.tura-ra teszi"', function (done) {
    //mocking
    const mw = getTuraMW({
      TuraModel: {
        findOne: (p1, callBack) => {
          expect(p1).to.be.eql({ _id: '10' })
          callBack(null, 'mockTura');    //ezzel térünk vissza, most csak egy stringként -> mockTura
        }
      }
    });

    const resMock = {
      locals: {}
    };

    //3 paraméterrel hívjuk meg a mw-t (req, res, next)
    mw(
      {          //req rész (itt kell definiálni: _id: req.params.routeID)
        //mocking params
        params: {
          routeID: '10'
        }
      },
      resMock,   //res rész    //mocking locals
      (err) => {     //ebben a részben térünk vissza ezért kell ide a done()
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({ tura: 'mockTura' })
        done();
      });
  });



  it('should call next with error on db problem', function (done) {
    //mocking
    const mw = getTuraMW({
      TuraModel: {
        findOne: (p1, callBack) => {
          expect(p1).to.be.eql({ _id: '10' })
          callBack('adatbhiba', null);    //ezzel térünk vissza, most a hiba: adatbhiba, tura pedig null de ez mind1 mert tura-ra most nem tesztelünk
        }
      }
    });

    const resMock = {
      locals: {}
    };

    //3 paraméterrel hívjuk meg a mw-t (req, res, next)
    mw(
      {          //req rész (itt kell definiálni: _id: req.params.routeID)
        //mocking params
        params: {
          routeID: '10'
        }
      },
      resMock,   //res rész    //mocking locals
      (err) => {     //ebben a részben térünk vissza ezért kell ide a done()
        expect(err).to.be.eql('adatbhiba');
        done();
      });
  });



  it('should call next when no trip is found in database', function (done) {
    //mocking
    const mw = getTuraMW({
      TuraModel: {
        findOne: (p1, callBack) => {
          expect(p1).to.be.eql({ _id: '10' })
          callBack(undefined, null);    //ezzel térünk vissza, most hiba: undefined, tura pedig null azaz nincs találat az adatb-ben
        }
      }
    });

    const resMock = {
      locals: {}
    };

    //3 paraméterrel hívjuk meg a mw-t (req, res, next)
    mw(
      {          //req rész (itt kell definiálni: _id: req.params.routeID)
        //mocking params
        params: {
          routeID: '10'
        }
      },
      resMock,   //res rész    //mocking locals
      (err) => {     //ebben a részben térünk vissza ezért kell ide a done()
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({})
        done();
      });
  });
});