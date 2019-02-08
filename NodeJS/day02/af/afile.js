require("./math-tool"); // 当省略文件名时，默认识别 index.js
var toch = require("chinese-finance-number");


var sl =  require("solarlunar");
var res = sl.solar2lunar(1990,11,23);
console.log('res:', res);

var res2 = toch(123.456);
console.log('res2:', res2);