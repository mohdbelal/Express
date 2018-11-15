var mysql = require('mysql');
//var con;

var con = mysql.createConnection({
host:"localhost",
user:"nikhil",
password:"nikhil",
database:"nikhil"
});

con.connect(function (err){
    if(err) throw err;
    console.log("Connected");
});

module.exports = con;