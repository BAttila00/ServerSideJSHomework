//kirajzolja az adott html oldalt

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.render(viewName, res.locals);
        console.log('render: ' + viewName);
        res.end('Template: ' + viewName);
    };

};