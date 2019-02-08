// req.url, 正则
// 路由清单
var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  // 统一设置一下 Header
  res.setHeader("Content-Type","text/html;charset=utf-8");

  console.log(req.url);
  if (req.url == '/') {
    res.end('home');
  } else if (req.url == '/music.mp3') {
    res.end('music channel');
  } else if (req.url == '/news.html') {
    // 无视扩展名
    res.end('news channel');
  } else if (/^\/student\/[\d]{6}$/.test(req.url)) {
    // 获取学生id
    var regexp = /\/student\/([\d]{6})/;
    var id = regexp.exec(req.url)[1];
    console.log('id:', id);

    // 读取文本文件，此为模拟的db
    fs.readFile('./db.json', function(err, data) {
        // callback里面有 res响应
      if (err) {
        console.log('文件读取失败');
        return;
      }
      // 转为对象，注意readFile进来的文件先 toString()
      var dataObj = JSON.parse(data.toString());
      console.log('dataObj:', dataObj);

      // 确定 数据库 中是否有这个学生
      if(!dataObj.hasOwnProperty(id)){
        // res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end("没有这个学生！");
        return;
      }

      // res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.write('<h1>学生信息，学号: ' + id + '</h1>');
      res.write('<h1>name: ' + dataObj[id].xingming + '</h1>');
      res.write('<h1>yuwen: ' + dataObj[id].yuwen + '</h1>');
      res.end(""); // 切记：必须写 end，表示结束输出流。
    });
  } else {
    // res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end('没有这个页面！');
  }
});

server.listen(3000);
