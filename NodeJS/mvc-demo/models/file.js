var fs = require('fs');

// 保存
exports.save = function(num, resList) {
  console.log('__dirname:', __dirname);
  // C:\Users\china\Documents\nodejs_demo\mvc\models
  fs.writeFile(
    __dirname + '/data/' + num + '.txt',
    JSON.stringify(resList),
    function() {}
  );
};

// 读取
exports.read = function(num, callback) {
  fs.readFile(__dirname + '/data/' + num + '.txt', function(err, data) {
    if (err) {
      callback(-1);
      return;
    }
    callback(JSON.parse(data));
  });
};
