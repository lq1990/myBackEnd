var str = '今年12岁明年13岁后年14了';

var reg = /(\d+)岁/g; // g: global, 

var res;
while ((res = reg.exec(str))) {
  console.log(res);
}


// 正则相关命令：
// exec, test, replace, search

// 正则中，
// 小括号: 常为分组，可与 | 连用
// 中括号：表示范围
// 大括号：次数