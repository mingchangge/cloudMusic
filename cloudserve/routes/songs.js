var express = require('express');
var router = express.Router();
var mysql=require('mysql');   //引入mysql数据库
var songDao=require('../dao/songDao'); //引入songDao


router.get('/recommedSong', function(req, res, next) {
	songDao.selectByAlbum(req,res,next);
});
router.get('/smallSlider',function(req, res, next){
	songDao.selectByTime(req,res,next);
});
router.post('/songList',function(req, res, next){
	songDao.selectBySongList(req,res,next);
});
router.post('/songInfo',function(req, res, next){
	songDao.selectBySong(req,res,next);
});
module.exports = router;