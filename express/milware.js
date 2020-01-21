const express = require('express');
 const app  = express();

 app.use(function (req,res, next){
     console.log('Time:',Date.now());
     next();
 });
 app.use('/home/:product', function (req,res, next){
    console.log('Request Type:',req.method);
    next();
});

app.get('/', function   (req,res){
    console.log('Ini adalah halaman Home');
    res.send('Ini adalah halaman Home');
});

app.get('/product', function (req,res){
    console.log('Ini adalah halaman Product');
    res.send('Ini adalah halaman Product');
});
app.get('/detailproduct', function   (req,res){
    console.log('Ini adalah halaman Detailproduct');
    res.send('Ini adalah halaman Detailproduct');
});


app.listen(8000,function (){
    console.log('Berjalan pada port 8000');
});