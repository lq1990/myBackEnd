/**
 * nodejs计算力弱，用方法弥补：
 * 使用文件写入读取，当某些数之前计算过时，会被存入文件，
 * 这次就直接读取。
 * 注意：本文件用到 异步、同步。
 *    异步：通过回调函数传参，
 *    同步：直接return传
 */

var math = require('../models/math');
var file = require('../models/file');

exports.showIndex = function(req, res) {
  // res.send("home page");
  res.render('index', {});
};

exports.showResult = function(req, res) {
  // res.send("result: "+req.params.number);
  
  // 得到数字，比如 localhost:3000/12345，会得到12345
  var num = req.params.number;

  // 记录时间t1
  var t1 = new Date();


  // controller 先命令文件读取，如果曾经被计算了就直接读文件，否则再计算。
  file.read(num, function(resList) { 
    // function中的参数 resList 接收 read中callback传的参
    if (resList == -1) {
      // 表示当前文件不存在
      // 调用 model中的文件来计算
      var resList = math.calc(num);
    //   console.log('resList1:', resList);
      file.save(num, resList);
    }

    var t2 = new Date();

    // console.log('resList2:', resList);
    // views/result.ejs 被渲染
    res.render('result', {
      number: num,
      resList: resList,
      during: t2-t1
    });
  });
};
