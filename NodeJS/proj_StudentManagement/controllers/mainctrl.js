var db = require('../models/db');
var formidable  = require("formidable");


// 把数据传给视图渲染
exports.showIndex = function(req, res) {
  db.getAllStudent(function(arr) {
    // console.log('arr:', arr);
    res.render('index', {
      arr: arr
    });
  });
};

exports.showAdd = function (req,res) {
  res.render("add",{});
};

// ajax做请求接口
exports.allstudent = function(req, res) {
  db.getAllStudent(function(arr) {
    // res.send("文本");
    // res.json 是express 的输出语句
    res.json({ results: arr });
  });
};

exports.doAdd = function (req,res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err,fields,files) {
    // fields 是json格式

    console.log("服务器收到了表单: "+fields);
    console.log(fields.uname);
    console.log(fields.age);
    console.log(fields.sex);
    console.log(fields.province);

    db.addStudent(fields,function (info) {
      res.send(info);
    });
  });
}
