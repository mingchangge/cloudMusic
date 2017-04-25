var express = require('express');
var router = express.Router();
var mysql=require('mysql');   //引入mysql数据库
var userDao=require('../dao/userDao'); //引入userDao


// 注册验证
router.post('/checkUser', function(req, res, next) {
	userDao.selectByPhone(req,res,next);
});
// 注册
router.post('/regist', function(req, res, next) {
    userDao.insertByRegist(req,res,next);
});
// 登录
router.post('/checkLogin', function(req, res, next) {
    var num=req.body.number;
    var pwd=req.body.pwd;
    var users = [num,pwd]
    userDao.checkByLogin(users,function(err,result){
        if(result!=''){
           req.session.user =result[0].username;
           req.session.phone =result[0].phone;
           // console.log(req.session);
           // console.log(12334);
           // req.session.userinfo = JSON.parse(result[0].userinfo);
        }
        res.send(result);            
    });
});
/* GET users listing. 验证用户是否第一次登陆 */
router.get('/checkFirst', function (req, res, next) {
    var result={};
    if (req.session && req.session.phone) {
        result.state ='true';
        result.phone = req.session.phone;
        result.user = req.session.user;
            // console.log(req.session);
    }else{
        result.state ='false';
    }
    // console.log(result)
    res.send(result);
});
// 退出登录
router.get('/exit', function(req, res, next) {
    req.session.destroy();
    // console.log(req.session);
    res.send(200);
});

// 获取用户信息
router.post('/getUserInfo', function(req, res, next) {
    // console.log(req.session);
    userDao.getUserInfo(req,res,next);
});
module.exports = router;
