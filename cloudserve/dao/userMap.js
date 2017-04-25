var user={
	selectByPhone:'select * from user where phone=?', //注册验证
	checkByLogin:'select * from user where phone=? and password=?',  //登陆验证，每个用户只有一条信息
	insertByRegist:'insert into user(phone,password,userinfo,songlist) value(?,?,?,?)',//注册是插入数据
	getUserInfo:'select username,songlist from user where phone=?' //获取用户名和歌单列表
};
module.exports=user;