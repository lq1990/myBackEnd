var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/haha.html") {
        fs.readFile("./public/b.html",function (err,data) {
            console.log('data:', data);
            res.end(data);
        })
    } else if(req.url=="/css.css") {
        fs.readFile("./public/css.css",function (err,data) {
            res.end(data);
        })
    } else if(req.url=="/dog1.jpg") {
        fs.readFile("./public/dog1.jpg",function (err,data) {
            res.end(data);
        })
    } else if(req.url=="/js.js"){
        fs.readFile("./public/js.js",function (err,data) {
            res.end(data);
        })
    }
    else {
        res.end("nothing");
    }

}).listen(3001);

// 访问页面时，http请求有很多，如果有用到的css 等资源文件，
// 需要 设置路由并读取