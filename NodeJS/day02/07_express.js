var express = require("express");
var app = express();

// ============== 中间件，讲究先后顺序 =======================
app.get("/",function (req,res) {
    res.set("Content-Type","text/html;charset=UTF-8");
    // res.send("i am home page");
    
    res.sendfile(__dirname+"/public/haha.html"); 
    // 设置绝对路径，用到 __dirname
});

app.get("/music",function (req,res) {
    res.send("music channel");
});

app.get("/news",function (req,res) {
    res.send("news channel");
});

app.get("/student/123",function (req,res) {
    res.send("123 号是班长");
});

// 用 冒号 表示参数 代替正则，
app.get("/student/:xuehao",function (req,res) {
    if(/^[0-9]{6}$/.test(req.params.xuehao)) { 
        // 再用正则检验学号正确性
        res.send("student, xuehao: "+req.params.xuehao);
    } else {
        res.send("学号不正确，应该为六位数字");
    }
});

// 静态资源一般放在最后，当上面get都没找到时，采用静态的。
// 可配置 静态资源。无论什么请求都会使用。
app.use("",express.static("public")); 
// http://localhost:3000/jingtai/img.jpg

app.listen(3000);