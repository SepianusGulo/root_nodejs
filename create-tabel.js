var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"as_tbl"

});
connection.connect(function (err){
    if(err){
        throw err;
    }
    console.log("Terkoneksi dengan sukses!");
    var sql = "CREATE TABLE D(id integer, title VARCHAR(255), description VARCHAR(255), name VARCHAR(150), email VARCHAR(20))";
     connection.query (sql,function (err,result){
        if (err) {
            throw err;
        }
        console.log("Tabel berhasil dibuat!");
        connection.destroy();
    })
})