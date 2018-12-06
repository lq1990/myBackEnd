// 使用http模块
var http = require('http');

// 创建 http server
http
  .createServer((req, res) => {
    // req获取url信息

    res.writeHead(200, {
      'Content-Type': 'text/html; charset="utf-8"'
    });
    res.write('hello, NodeJS.');
    res.write("我是第一个nodejs程序");
    res.end(); // 结束响应
  })
  .listen(8001); // 监听端口 8001
