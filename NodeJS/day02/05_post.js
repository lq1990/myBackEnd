/**
 * 此案例演示了 POST请求的参数如何获得
 */

var finalhandler = require('finalhandler');
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require("querystring");
var serveStatic = require('serve-static');

// 配置静态资源服务器
var serve = serveStatic('public', { index: ['index.html', 'index.htm'] });


var server = http.createServer(function(req, res) {
  

  // 路由
  var pathname = url.parse(req.url).pathname;
  // console.log('pathname:', pathname);
  if (pathname == '/addStudent') {
    // 定义了一个post变量，用于暂存请求体的信息
    var content = "";

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on("data",function (chunk) {
      // 当chunk 大小超过 800kb，会分段
      console.log('chunk:', chunk.toString());
      content += chunk;
    });

    // 在end事件出发后，通过querystring.parse将post解析为真正的post请求格式

    req.on("end",function () {
      content = querystring.parse(content);
      console.log('content:', content);
      res.end("success");
    });
    return; // 若不加return，则会往下执行，去找静态资源，但是找不到的。
  }
  // 使用静态资源，静态化相当于写 路由了。
  serve(req, res, finalhandler(req, res));
});

server.listen(3000);
