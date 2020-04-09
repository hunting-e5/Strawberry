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
},]

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/posts', (req, res) => {
    // res.send({ message: 'server is running!' });
    res.json({supplyPostList: supplyPostList, demandPostList: demandPostList});
});
app.listen(port, () => console.log(`Listening on port ${port}`));