var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');
 
app.get('/',(req, res) =>{
    res.render('home');
});
 
app.listen(3000, console.log('puerto 3000'));