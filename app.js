var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();

let num=[];
for(let i=1;i<=50;i++){
    if(i%2==0){
        num[i]=i+' Soy Par!'
    }
    else{

        num[i]=i+' Soy Impar!'
    }
}
 
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');
 
app.get('/',(req, res) =>{
    res.render('home',{
        num
    });
});
 
app.listen(3000, console.log('puerto 3000'));
