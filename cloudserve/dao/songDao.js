// import 需要的辅助文件，实现与MySQL交互
var mysql=require('mysql');  //添加mysql支持
var $conf = require('../conf/db'); //引入数据库连接
var $sql=require('./songMap'); //引入sql语句


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
	// 查找前8个专辑
	selectByAlbum:function(req,res,next){
		pool.getConnection(function(err, conn) {
			conn.query($sql.selectByAlbum, function(err, result) {
				if(result){
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
				}else{
					throw err;
				}
				// 释放连接
				conn.release();
			});
		});
	},
	// 按时间排序，查10首歌
	selectByTime:function(req,res,next){
		pool.getConnection(function(err, conn) {
			conn.query($sql.selectByTime, function(err, result) {
				if(result){
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
				}else{
					throw err;
				}
				// 释放连接
				conn.release();
			});
		});
	},
	// 根据返回专辑名称取回歌单
	selectBySongList:function(req,res,next){
		var album=req.body.album;
		// console.log(req.body);
		pool.getConnection(function(err, conn) {
			conn.query($sql.selectBySongList,album, function(err, result) {
				if(result){
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
				}else{
					throw err;
				}
				// 释放连接
				conn.release();
			});
		});
	},
	selectBySong:function(req,res,next){
		var song=req.body.song;
		// console.log(req.body);
		pool.getConnection(function(err, conn) {
			conn.query($sql.selectBySong,song, function(err, result) {
				if(result){
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
				}else{
					throw err;
				}
				// 释放连接
				conn.release();
			});
		});
	}
};
