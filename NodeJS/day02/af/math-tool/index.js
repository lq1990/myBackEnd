require("./base");
var a = 111;
console.log("math-tool from testjs, a: "+a);

exports.a = a; // 谁来引用这个文件，就把 exports 输出给谁

function sum() {
    var res = 0;
    for(var i=0;i<arguments.length;i++){
        res += arguments[i];
    }
    return res;
}

function mean() {
    var sum1 = sum.apply(null, arguments);
    return sum1 / arguments.length;
}

exports.sum = sum;
exports.mean = mean;

// var fs = require("fs");

// fs.readFile("./wallpaper1.jpg",function (err,data) {
//     console.log("hi，我是testjs中的回调函数");
// });

