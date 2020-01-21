const express = require('express');
const app = express();


app.get('/', function(req,res){
    res.send('Express.js GET');
});

app.all('/', function(res,res){
    res.send('Express.js ALL');
});

app.listen(3000, function (){
    console.log('Aplikasi ini berjalan pada port 3000');
});