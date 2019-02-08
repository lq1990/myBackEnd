var http = require('http');

var a = 0;
var server = http.createServer(function(req, res) {
  a++;
  // 设置响应头，可在浏览器 network中查看。
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');
  res.end(a + ''); // 在chrome中 a每次会加2。因为还会加载一个小图标。
});

server.listen(3000);
console.log('begin...');

// 无论哪里的用户，都共享一个a。
// 证明nodejs是单线程。
