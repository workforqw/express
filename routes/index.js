var express = require('express');
var router = express.Router();

/* GET home page. */

//不带cookie
router.use('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

////带cookie的
//router.use('/', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", 'http://yao.jd.com:8000');
//    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    res.header('Access-Control-Allow-Headers', 'Content-Type');
//    res.header("Access-Control-Allow-Credentials", 'true');
//    next();
//});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/test', function(req, res, next){
    res.send({aa: 1111});
});

module.exports = router;
