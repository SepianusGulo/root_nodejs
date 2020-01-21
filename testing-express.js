const express =  require ('express');
const app = express();

app.get('/', function(req,res){
    res.send('Salam dari express.js');
});

app.listen(3000,function (){
    console.log('Aplikasi ini berjalan pada port 3000!');
});