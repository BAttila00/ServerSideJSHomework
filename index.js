/*
const TuraModel = require('./models/tura');
const TurazoModel = require('./models/turazo');

let egyTurazo = new TurazoModel();
egyTurazo.nev = 'John';
egyTurazo.eletkor = 25;
egyTurazo.nem = 'férfi'
egyTurazo.email = 'asd@gmail.com';
egyTurazo.save((err) => {
    console.log(err);

    let egyTura = new TuraModel();
    egyTura.cim = 'börzsöny 01';
    egyTura.tav = 50;
    egyTura.rovidLeiras = 'jó volt';
    egyTura.hosszabbLeiras = 'elég jó volt';
    egyTura._turazo = egyTurazo;

    egyTura.save((err)=>{
        console.log(err);
    });
});

let egyTurazo2 = new TurazoModel();
egyTurazo2.nev = 'Doe';
egyTurazo2.eletkor = 30;
egyTurazo2.nem = 'férfi'
egyTurazo2.email = 'fgh@gmail.com';
egyTurazo2.save((err) => {
    console.log(err);

    let egyTura2 = new TuraModel();
    egyTura2.cim = 'pilis 01';
    egyTura2.tav = 40;
    egyTura2.rovidLeiras = 'jó volt';
    egyTura2.hosszabbLeiras = 'elég jó volt';
    egyTura2._turazo = egyTurazo2;

    egyTura2.save((err)=>{
        console.log(err);
    });
});

let egyTurazo3 = new TurazoModel();
egyTurazo3.nev = 'Jane';
egyTurazo3.eletkor = 20;
egyTurazo3.nem = 'nő'
egyTurazo3.email = 'xyz@gmail.com';
egyTurazo3.save((err) => {
    console.log(err);

    let egyTura3 = new TuraModel();
    egyTura3.cim = 'pilis 02';
    egyTura3.tav = 45;
    egyTura3.rovidLeiras = 'jó volt';
    egyTura3.hosszabbLeiras = 'elég jó volt';
    egyTura3._turazo = egyTurazo3;

    egyTura3.save((err)=>{
        console.log(err);
    });
});
*/


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

app.use(express.static('static'));

// Load routing
require('./route/index')(app);

// app.use(function(req,res){
//     res.render('valami',{
//         alma: 12
//     })
// });

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function () {
    console.log('Hello :3000');
});
