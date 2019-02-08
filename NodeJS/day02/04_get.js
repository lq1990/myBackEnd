/**
 * 此案例演示了 GET请求的参数如何获得
 */

var finalhandler = require('finalhandler');
var http = require('http');
var url = require('url');
var fs = require('fs');
var serveStatic = require('serve-static');

// 配置静态资源服务器
var serve = serveStatic('public', { index: ['index.html', 'index.htm'] });


var server = http.createServer(function(req, res) {
  

  // 路由
  var pathname = url.parse(req.url).pathname;
  // console.log('pathname:', pathname);
  if (pathname == '/addStudent') {
    // 拿到 GET请求参数
    var queryJson = url.parse(req.url, true).query;
    // console.log(queryJson.name);
    // console.log(queryJson.age);

    var data = '姓名：' + queryJson.name + '\n';
    data += '年龄：' + queryJson.age + '\n';

    fs.writeFile(
      './student_data/' + queryJson.name + '.txt',
      data,
      function(err) {
          // 回调函数，写文件结束后，给前端返回消息
          if(err) {
              res.end("error");
          } else {
              res.end("success");
          }
      }
    );

    return;
  }
  // 使用静态资源
  serve(req, res, finalhandler(req, res));
});

server.listen(3000);
