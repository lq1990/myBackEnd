var fs = require('fs');

function read(num, callback) {
  fs.readFile('./data/' + num + '.txt', function(err, data) {
    if (err) {
      callback(-1);
      return;
    }
    // 读取到的文件时json格式，先解析再回传
    var dataarr = JSON.parse(data);
    callback(dataarr);
  });
}

function write(num, arr) {
  var data = JSON.stringify(arr);
  fs.writeFile('./data/' + num + '.txt', data, function() {
    // 这里什么不做
  });
}

exports.read = read;
exports.write = write;

// read(188,function (data) {
//     console.log('data:', data);
// })
// write(88,[1,23,4,5,8],function (err) {
//
// });
