const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('static'));

// Load routing
require('./route/index')(app);

// app.use(function(req,res){
//     res.render('valami',{
//         alma: 12
//     })
// });

app.listen(3000, function () {
    console.log('Hello :3000');
});
