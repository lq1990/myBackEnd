var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");

// 准备映射关系对
var mime = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".png": "image/png",
    ".html": "text/html;charset=utf-8",
    ".css": "text/css",
    ".js": "application/x-javascirpt"
}

// 基本思想：
// 用户输入什么url，就去用fs读取
http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);

    // 若url中不存在扩展名，则表示这是一个文件夹，
    // 此时自动补全 /index.html
    if(!extname) {
        if(pathname.substr(-1) != "/") {
            // console.log("跳转");
            res.writeHead(302, {"Location": pathname+"/"})
        }
        pathname += "index.html";
    }
    // console.log('pathname:', pathname);
    fs.readFile("./myweb/"+pathname, function (err,data) {
        if(err) {
            res.end("not found!");
            return;
        }
        // 检查是否属于我已知的 mime类型
        if(mime.hasOwnProperty(extname)) {
            res.setHeader("content-type", mime[extname]);
        }
       res.end(data);
    });
    
}).listen(3003);

// 此种方法的缺点：
// 1. Header 中 content-type 不确定。使用 mime obj
// 2. localhost:3003/b 这种没有扩展名的路径，意味着用户输入了一个url，
//      则自动补充 /index.html
// 3. 304 not modified 问题。