var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");

var server = http.createServer((req,res)=>{
    // 转为对象，将url字符串变为json对象。
    var urljson = url.parse(req.url); // 当设置true后，query会变成obj格式，方便存入数据库。
    console.log('urljson:', urljson);
    // 得到文件路径
    var pathname = urljson.pathname;
    // 得到扩展名
    var extname = path.extname(pathname);
    // 得到查询字符串
    var qs = urljson.query;
    // 转为查询对象
    var qsObj = querystring.parse(qs); // 功能和 url.parse(,true)相同

    console.log('pathname:', pathname);
    console.log('extname:', extname);
    console.log('qs:', qs);
    console.log('qsObj:', qsObj);
    res.end("end");
});

server.listen(3002);