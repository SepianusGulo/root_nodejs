//javaScript source code

var http = require('http'); // menanggil modul http dan memasukannya kevariabel http(namanya boleh bebas)

http.createServer(function(req,res){
     res.write('ini adalalah server http !'); // tulis pesan untuk menampilakan pada browser
     res.end(); // mengakhiri respon

}).listen(8080); // menampilkan objek http pada browser