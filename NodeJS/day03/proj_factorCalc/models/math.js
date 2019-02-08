
// 计算因数
// var calcfactor = 
exports.calcfactor = function (num) {
    var res = [];
    for(var i=1;i<=num;i++) {
        num % i == 0 && res.push(i);
    }
    return res;
};

// console.log(calcfactor(88));