## 项目概况
1. 前端采用vue框架搭建页面
2. 前端采用vuex管理歌曲、用户状态信息
3. 前端手机版页面采用响应式布局，适应不同的手机分辨率
4. 采用express生成后端服务器
5. 使用mysql数据库存储数据表，暂分为用户表和歌曲表
6. 使用七牛云存储音乐文件与图片文件
## 目录结构
描述项目目录结构，类似如下格式
```bash
cloud
/
|--cloudmusic/     # PC端网页
|        |--src    # 前端文件
|          |--assets  # 前端资源
|             |--imgs # 图片资源
|          |--components # 前端组件
|          |--router    # 前端路由
|          |--store     # 数据状态管理 
|--cloudserve        # 后端服务器
|         |--public  #服务器静态文件
|         |--routes  #服务器端路由
|--readme      # 说明文件
```

## 路由规则设计
对前后端的重要接口进行设计，包括请求地址与交换数据的格式,以及对数据信息的描述。例如如下格式。
### 专辑数据查询 接口

- url："/song/selectByAid"
- type： `GET`

```json
{
  song:'',src:'',author:'',imgs:'',singer:'',tag:'',summary:'',time:''
}
```

|key|数据类型|描述|
|---|---|---|
|song|char|对象，请求用户信息，包括用户等级、歌曲列表|
|src|varchar|来源|
|author|char|作者|
|imgs|varchar|音乐图片|
|singer|char|歌手|
|tag|char|标签|
|summary|varchar|简介|
|time|datetime|最后更新时间|
|...|...|...|


### 个人用户数据查询 接口

- url："/user/selectById"
- type： `GET`

```json
{
    userinfo{[info:'';level:'';songlist[{},{}]]}
}
```

|key|描述|
|---|---|
|userinfo|对象，请求用户信息，包括用户等级、歌曲列表|
|...|...|


## 数据库设计

> 采用mysql数据库，库名为：cloudmusic，目前仅有用户表和歌曲表。用户表存储用户id、账号、密码和用户信息（以json格式存储用户喜好、收藏歌单等信息）等；歌曲表存储歌曲的id、歌名、来源等信息

### 用户表
表名：user

|key|type|描述|
|---|---|---|
|id|number，A_I|自增长的数据类型，主键|
|username|char|用户名|
|password|char|密码|
|phone|number|电话号码|
|wechat|number|微信|
|qq|number|QQ|
|netease|char|网易邮箱|
|sina|char|新浪邮箱|
|userinfo|text|用户详细信息(以json格式存储歌单等)|

### 歌曲表
表名：song

|key|type|描述|
|---|---|---|
|id|number，A_I|自增长的数据类型，主键|
|song|char|歌名|
|src|varchar|来源|
|author|char|作者|
|imgs|varchar|音乐图片|
|singer|char|歌手|
|aid|number，UNIQUE |专辑id|
|album|char|专辑|
|tag|char|标签|
|summary|varchar|简介|
|time|datetime|最后更新时间|
