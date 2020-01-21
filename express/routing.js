const express = require('express');
const app = express();


app.get('/', function(req,res){
    res.send('Ini adalah halaman Product');
});

app.all('/', function(res,res){
    res.send('Ini adalah halaman Product');
});

app.listen(8000, function (){
    console.log('Ini adalah halaman Product');
});