var file = require('../models/file');
var math = require('../models/math');

exports.showIndex = function(req, res) {
  res.render('index', {});
};

exports.showResult = function(req, res) {
  var t1 = new Date();

  var num = req.params.number;

  if (isNaN(num)) {
    res.send('请输入合法数字！');
    return;
  }
  if (num > 100000) {
    res.send('数字太大了！');
    return;
  }

  // 读取文件，确认下是否已经存在，若不存在再计算
  file.read(num, function(result) {
    if (result == -1) {
      // 这个数字还未被计算，需要算
      var result = math.calcfactor(num);

      // 保存
      file.write(num, result);
    }
    var t2 = new Date();

    // console.log('result:', result);
    // 到这里为止，result一定是数组了
    res.render('result', {
      num: num,
      result: result,
      during: t2 - t1
    });
  });
};
