// 나중에 db 관련 내용 여기로 옮길 예정

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