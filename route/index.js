

const authMW = require('../middleware/auth/authMW');
const checkPassMW = require('../middleware/auth/checkPassMW');
const generateNewPasswordMW = require('../middleware/auth/generateNewPasswordMW');
const savePasswordMW = require('../middleware/auth/savePasswordMW');
const renderMW = require('../middleware/renderMW');

const delTuraMW = require('../middleware/tura/delTuraMW');
const getTurakMW = require('../middleware/tura/getTurakMW');
const getTuraMW = require('../middleware/tura/getTuraMW');
const saveTuraMW = require('../middleware/tura/saveTuraMW');
const getAllUtvonalMW = require('../middleware/tura/getAllUtvonalMW');

const delTurazoMW = require('../middleware/turazo/delTurazoMW');
const getTurazokMW = require('../middleware/turazo/getTurazokMW');
const getTurazoMW = require('../middleware/turazo/getTurazoMW');
const getTopTurazokMW = require('../middleware/turazo/getTopTurazokMW');
const saveTurazoMW = require('../middleware/turazo/saveTurazoMW');

module.exports = function (app) {
    const objRepo = {};

// app.use('/',
//     checkPassMW(objRepo),
//     renderMW(objRepo, 'index'));

app.get('/lostPassword',
    generateNewPasswordMW(objRepo),
    savePasswordMW(objRepo),
    renderMW(objRepo, 'elfelejtettJelszo'));

app.use('/routes',
    getAllUtvonalMW(objRepo),
    checkPassMW(objRepo),
    renderMW(objRepo, 'utvonalak'));

app.use('/athletes',
    getTopTurazokMW(objRepo),
    checkPassMW(objRepo),
    renderMW(objRepo, 'turazok'));

app.get('/routes/:routeID',                     //todo: itt még valami nem stimmel, nem navigál át a  részletező nézetre
    getTuraMW(objRepo),
    renderMW(objRepo, 'turaReszletezo'));

//bejelentkezes utani lista
app.get('/athletesList',
    authMW(objRepo),
    getTurazokMW(objRepo),
    renderMW(objRepo, 'turazokModList'));

app.use('/athletesList/new',
    authMW(objRepo),
    saveTurazoMW(objRepo),
    renderMW(objRepo, 'turazoEditNew'));

app.use('/athletesList/edit/:athleteID',
    authMW(objRepo),
    getTurazoMW(objRepo),
    saveTurazoMW(objRepo),
    renderMW(objRepo, 'turazoEditNew'));

app.get('/athletesList/del/:athleteID',
    authMW(objRepo),
    getTurazoMW(objRepo),
    delTurazoMW(objRepo),
    renderMW(objRepo, 'turazoEditNew'));


app.get('/route/:athleteID',
    authMW(objRepo),
    getTurazoMW(objRepo),
    getTurakMW(objRepo),
    renderMW(objRepo, 'turazoUtvonalai'));

app.use('/route/:athleteID/new', 
    authMW(objRepo),
    getTurazoMW(objRepo),
    saveTuraMW(objRepo),
    renderMW(objRepo, 'turaEditNew'));

app.use('/route/:athleteID/edit/:routeID',
    authMW(objRepo),
    getTurazoMW(objRepo),
    getTuraMW(objRepo),
    saveTuraMW(objRepo),
    renderMW(objRepo, 'turaEditNew'));

app.get('/route/:athleteID/del/:routeID',
    authMW(objRepo),
    getTurazoMW(objRepo),
    getTuraMW(objRepo),
    delTuraMW(objRepo),
    renderMW(objRepo, 'turaEditNew'));

app.use('/',
    checkPassMW(objRepo),
    renderMW(objRepo, 'index'));

}