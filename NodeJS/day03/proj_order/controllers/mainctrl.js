var formidable = require('formidable'); // 借助 formidable 处理post请求
var file = require('../models/file');

// 显示首页。
exports.showIndex = function(req, res) {
  // 渲染时，自动找 views/index.ejs
  res.render('index', {});
};

// 向外暴露一个中间件，这个是ajax接口。
exports.baocun = function(req, res) {
  // console.log("有人提交表单");
  var form = new formidable.IncomingForm();
  form.parse(req, (err, fields) => {
    // fields：表单域
    var shoujihao = fields.shoujihao;
    var cai = fields.cai;
    file.save(shoujihao, cai, function(err, chunk) {
      if (err) {
        res.send('-1');
      } else {
        res.send('1');
      }
    });
  });
};

exports.showAlldingcan = function(req, res) {
  // res.send("alldingcan");
  file.getAllFilesName(function(arr) {
    //    console.log('arr:', arr);
    res.render('alldingdan', {
      allphone: arr
    });
  });
};

exports.showOneDingdan = function(req, res) {
  var shoujihao = req.params.shoujihao;
  // ctrl先集结数据
  file.read(shoujihao, function(cai) {
    if (cai == '-1') {
      cai = "this user is not found";
    }

    res.render('onedingdan', {
      shoujihao: shoujihao,
      cai: cai
    });
  });
};
