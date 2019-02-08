var express = require('express');
var app = express();

// 设置默认的模板引擎，此时express将引入ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('sy2', {
    "dongxi": 'phone',
    "qian": 1000 * 8,
    "ouxiang": [
        {"xingming":"anna", "nianling":22},
        {"xingming":"beta", "nianling":23},
        {"xingming":"cello", "nianling":24}
    ]
  });
});
app.listen(3001);

// 这个文件: controller
