var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",

});
connection.connect(function (err){
if(err){
    console.error('error connection :' + err.stack);
    return;
}
console.log('terkoneksi dengan id:' + connection.threadId);
})