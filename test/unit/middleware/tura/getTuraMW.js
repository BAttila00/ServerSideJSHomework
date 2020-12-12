var expect = require('chai').expect;
var getTuraMW = require('../../../../middleware/tura/getTuraMW');

describe('getTuraMW middleware ', function () {

  //a test scene
  it('should return trips', function (done) {
    //mocking
    const mw = getTuraMW({
      TuraModel: {
        findOne: (p1, callBack) => {
          expect(p1).to.be.eql({_id: '10'})
          callBack(null, 'mockTura');    //ezzel térünk vissza, most csak egy stringként -> mockTura
        }
      }
    });

    //3 paraméterrel hívjuk meg a mw-t (req, res, next)
    mw(
      {          //req rész (itt kell definiálni: _id: req.params.routeID)
        //mocking params
        params: {
          routeID: '10'
        }
      }, 
      {           //res rész
        //mocking locals
        locals: {

        }
      }, () => {
        done();
      });
  });
});