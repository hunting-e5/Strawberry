var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "sangachoi",
    password: "1234",
    database: "sb-db"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM demandPostList", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

export default demandPostList