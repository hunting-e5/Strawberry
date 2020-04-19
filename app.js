var supplyPostList= [{
    "id": 1,
    "title": "차 좀 빌려가",
    "price": 500,
    "category": "life",
    "FaNum" :0,
    },{
    "id":2,
    "title": "책 좀 빌려가",
    "price": 300,
    "category": "life",
    "FaNum" :0,
    },]
var demandPostList= [{
    "id":3,
    "title": "차 좀 빌려줘",
    "price": 400,
    "category": "life",
    "FaNum" :0,
},{
    "id":4,
    "title": "책 좀 빌려줘",
    "price": 2,
    "category": "life",
    "FaNum" :0,
},{
    "id":5,
    "title": "무좀 빌려줘",
    "price": 30,
    "category": "life",
    "FaNum" :0,
},]

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const {mysql} = require('./models');
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

app.get('/api/posts', (req, res) => {
    // res.send({ message: 'server is running!' });
    res.json({supplyPostList: supplyPostList, demandPostList: demandPostList});
});
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
app.get('/api/demandpost', (req, res) => {
    connection.query(
        'SELECT * FROM DemandPost',
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));