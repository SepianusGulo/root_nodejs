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

    var sql = "INSERT INTO product (nama_product, gambar,harga_product,des_product,createdate) VALUES ('Iphone X','ip1.jpg', '120000', 'Kami menjual berbagai jenis smartphone silahkan dipesan!',now())";

     connection.query (sql,function (err,result){
        if (err) {
            throw err;
        }
        console.log("Data berhasil diinsert!");
        connection.destroy();
    })
})