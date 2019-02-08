// 读取内置模块http，开发服务器用的
var http = require('http');

// 创建一个服务器
var server = http.createServer(function(req, res) {
  let a = 1;
  res.end('<h1>happy' + (a + 4) + '</h1>');
  // (3+4)执行在 服务器上，所以在浏览器查看源码时，并不显示 (3+4)，而是显示7
});

// 监听
server.listen(3000);
console.log("服务器监听3000端口...");
