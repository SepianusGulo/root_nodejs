var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecommerce_gulo"

});
connection.connect(function (err){
    if(err){
        throw err;
    }
    console.log("Terkoneksi dengan sukses!");
    var sql = "CREATE TABLE product(id_product integer, nama_product VARCHAR(60), gambar VARCHAR(255), harga_product VARCHAR(13), des_product text,createdate date)";
     connection.query (sql,function (err,result){
        if (err) {
            throw err;
        }
        console.log("Tabel berhasil dibuat!");
        connection.destroy();
    })
})