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
    console.log("Terkoneksi dengan Sukses!");

    connection.query("SELECT * FROM d", function (err,result,field){
        if (err){
            throw err;

        }
        console.log(result);
        connection.destroy();
        });
})