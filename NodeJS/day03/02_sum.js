function sum() {
    var _sum = 0;
    for(var i=0;i<arguments.length;i++) {
        _sum += arguments[i];
    }
    return _sum;
}

// 计算实参列表所有数字的平均数
function mean() {
    var _sum = sum.apply(null,arguments);
    return _sum / arguments.length;
}

// console.log(mean(3,4,5,6,7));

// ================== 应用 ===========================
var arr = [12,3,4,5,55,6];
console.log( Math.max.apply(null,arr) );
// apply可打散数组

