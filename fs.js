var fs = require("fs"); //memanggil modul fs dan memasukannya kedalam variabel

console.log("START");

// menggunakan modul fs untuk membaca file secara asynchronus 
fs.readFile('asynchronous.txt', function (err,data){
    if(err){
       return console.error(err);
    }
    console.log("file ini dibaca secara asynchronous:" + data.toString());

});
// menggunakan modul fs untuk membaca file secara synchronus 
 var data = fs.readFileSync("synchronous.txt");
 console.log("file ini dibaca secara synchronous:" + data.toString());
 console.log("STOP");