// import 需要的辅助文件，实现与MySQL交互
var mysql=require('mysql');  //添加mysql支持
var $conf = require('../conf/db'); //引入数据库连接
var $sql=require('./userMap'); //引入sql语句


// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);


// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, req) {
	if(typeof req === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(req);
	}
};

module.exports={
	// 注册查询
	selectByPhone:function(req,res,next){
		pool.getConnection(function(err, conn) {
			var PNumber=req.body.number;
			conn.query($sql.selectByPhone,PNumber, function(err, result) {
				if(result){
					// console.log(result);	
				}else{
					throw err;
				}
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
				// 释放连接
				conn.release();
			});
		});
	},
	// 注册
	insertByRegist:function(req,res,next){
		var num=req.body.num;
        var pwd=req.body.Lpwd;
        var info=req.body.Rinfo;
        pool.getConnection(function(err, conn) {
			conn.query($sql.insertByRegist,[num,pwd,JSON.stringify({"level":1,"fans":1}),JSON.stringify([{"album":"love","songlist":[]}])],function(err, result) {
				if(result){
					// code:200
					// console.log(req.body);
				}else{
					throw err;
				}
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
				// 释放连接
				conn.release();
			});
		});
	},
	// 登录查询
	checkByLogin:function(users,callback){
		pool.getConnection(function(err, conn) {
			conn.query($sql.checkByLogin,users,function(err, result) {
				// console.log(err,result)
				callback(err,result)
				// 释放连接
				conn.release();
			});
		});
	},
	// 根据返回的号码，查询用户信息
	getUserInfo:function(req,res,next){
		var phone=req.body.num;
		pool.getConnection(function(err, conn) {
			conn.query($sql.getUserInfo,phone,function(err, result) {
				// console.log(err,result);
				jsonWrite(res, result);
				// 释放连接
				conn.release();
			});
		});
	}
};
