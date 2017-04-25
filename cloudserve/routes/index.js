var express = require('express');
var router = express.Router();
var useragent = require('express-useragent');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var deviceAgent = req.headers["user-agent"].toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
  if (agentID) {
//     res.sendfile('手机页面地址');
  } else {
//      res.sendfile('电脑页面地址');
  }
res.send(req.useragent);
});

module.exports = router;
