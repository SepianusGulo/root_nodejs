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

    var sql = "INSERT INTO d (title , description, name, email) VALUES ('Codeigniter','pengenalan dengan pengertian nodejs', 'Alex', 'alex23@gmail.com')";

     connection.query (sql,function (err,result){
        if (err) {
            throw err;
        }
        console.log("Data berhasil diinsert!");
        connection.destroy();
    })
})