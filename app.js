// server.js로 해석해도 됨
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for connecting database in AWS
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})
connection.connect();


// Create DemandPost
app.post('/api/demandpost', (req, res) => {
    let sql = "INSERT INTO DemandPost VALUES(null, ?, ?, ?, ?, ?, 12, ?, ?, ?, NOW())";
    let createdUserID = req.body.createdUserID;
    let postCategoryID = req.body.postCategoryID;
    let nego = req.body.nego;
    let imgSrc = req.body.imgSrc;
    let description = req.body.description;
    let demandPostTitle = req.body.demandPostTitle;
    let demandPostLocation = req.body.demandPostLocation;
    let demandPostPrice = req.body.demandPostPrice;
    let params = [createdUserID, postCategoryID, nego, imgSrc, description, demandPostTitle, demandPostLocation, demandPostPrice];
    connection.query(sql, params, (err, rows, fields) => {
        console.log(err);
        res.send(rows);
    })
});

// Read DemandPost
app.post('/api/readDemandPost', (req, res) => {
    let sql = 'SELECT * FROM DemandPost';
    connection.query(sql, (err, rows, fields) => {
            console.log(err);
            res.send(rows);
        }
    )
});

// SupplyPost 도 똑같이 만들면 됨


app.listen(port, () => console.log(`Listening on port ${port}`));