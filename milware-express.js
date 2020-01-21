const express = require('express');
 const app  = express();

 app.use(function (req,res, next){
     console.log('Time:',Date.now());
     next();
 });
 app.use('/user/:id', function (req,res, next){
    console.log('Request Type:',req.method);
    next();
});

app.get('/', function   (req,res){
    console.log('Salam dari Express.js');
    res.send('Salam dari Express.js');
});

app.get('/user/:id', function (req,res){
    console.log('Menampilkan User ID');
    res.send('Menampikan User ID');
});

app.listen(3000,function (){
    console.log('Berjalan pada port 3000');
});