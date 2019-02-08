// nodejs:
// 单线程、异步IO、事件驱动

var fs = require('fs');

// 异步读取文件. 当读取结束后，回调函数执行。
fs.readFile('./1.txt', function(err, data) {
  console.log('data:', data.toString());
});

var sum = 0;
for (var i = 0; i <= 100; i++) {
  sum += i;
}
console.log('sum:', sum);
// 先输出sum，再data
