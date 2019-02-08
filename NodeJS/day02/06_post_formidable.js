/**
 * post请求通过formidable来处理参数。
 * 此文件配合 index2.html
 */

var finalhandler = require('finalhandler');
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var serveStatic = require('serve-static');
var formidable = require('formidable');
var path = require('path');

// 配置静态资源服务器
var serve = serveStatic('public', { index: ['index.html', 'index.htm'] });

var server = http.createServer(function(req, res) {
  // 路由
  var pathname = url.parse(req.url).pathname;


  if (pathname == '/shangchuan') {
    //   创建一个一个表单的实例
    var form = new formidable.IncomingForm();
    form.uploadDir = './uploads'; // 设置上传文件 的保存位置。
    // 处理表单
    form.parse(req, function(err, fields, files) {
      // fields 表示普通控件
      // files  表示文件控件
      console.log('fields:', fields);
      console.log('files:', files);

      console.log('files.wenjian:', files.wenjian);
      console.log('files.wenjian.File:', files.wenjian.File);

      var extname = path.extname(files.wenjian.name);
      if (!files.wenjian) return;

      if (!files.wenjian.name) {
        res.end('pls upload!');
        return;
      }

      // 默认的被上传的文件被接受后，并没有 扩展名，可人为加上。
      fs.rename(files.wenjian.path, files.wenjian.path + extname, function() {
        res.end('upload finished.');
      });
    });

    return; // 若不加return，则会往下执行，去找静态资源，但是找不到的。
  }
  // 使用静态资源，静态化相当于写 路由了。
  // 打开页面就能看到 表单，因为我们有静态文件。
  serve(req, res, finalhandler(req, res));
});

server.listen(3000);
