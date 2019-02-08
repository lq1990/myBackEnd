/**
 * app中 路由命令controller，
 * ctrl再命令model找数据，找到数据后
 * ctrl把数据给view 显示。
 */

var express = require('express');
var app = express();
var mainctrl = require("./controllers/mainctrl");

// 定义模板引擎
app.set("view engine","ejs");

app.get("/",                  mainctrl.showIndex);
// 当有人用 post 请求访问 /baocun 时
// 把中间件（含有req,res）放到controllers中
app.post('/baocun',           mainctrl.baocun);  // ajax

// 显示订单
app.get("/dingdan",           mainctrl.showAlldingcan);
app.get("/dingdan/:shoujihao",mainctrl.showOneDingdan);



// 将public文件夹静态化。
// 静态资源：所有在前端执行的代码，而不需后台编译。
app.use(express.static('public'));

app.listen(3000);
console.log("订餐系统已经运行");
