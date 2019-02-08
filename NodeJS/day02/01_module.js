var test = require("./af/test"); // 会执行test.js，若其中有异步文件，不会死等。
console.log("from 01.js, a: "+test.a);

console.log(test.sum(11,2,3));
console.log(test.mean(11,2,3));


