var songs={
	selectByAlbum:'select * from song group by album order by time desc limit 8',
	selectByTime:'select * from song order by time desc limit 10',
	selectBySongList:'select * from song where album=? order by time desc',
	selectBySong:'select * from song where song=?'

};
module.exports=songs;