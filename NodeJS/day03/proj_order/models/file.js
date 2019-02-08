var fs = require('fs');

// fs文件的路径是以 控制台路径为基础。注意 ==================
var baseurl = './data';
exports.save = function(shoujihao, data, callback) {
  fs.writeFile(baseurl + '/' + shoujihao+".txt", data, callback);
  //   fs.appendFile(fileurl, data, callback);
};

// writeFile表示覆盖文件，appendFile表示追加文件

// 这个函数的功能就是从文件夹中获得所有文件名
// var getAllFilesName = 
exports.getAllFilesName = function(callback) {
    // fs.readdir() 可以读取一个文件夹中的所有文件的文件名到一个数组中。
    // readdir 是异步函数，所以必须通过callback传参 =============
  fs.readdir(baseurl, function(err, filenameArr) {
      if(err){
          throw new Error("读取文件清单错误！");
          return ;
      }
    // console.log('filenameArr:', filenameArr);

    // 准备一个数组，数组里存放不加上 ".txt"后缀的文件名
    var resArr = [];
    for(var i=0;i<filenameArr.length;i++){
      // ".txt"占据4位，所以截取
      resArr.push(filenameArr[i].substr(0, filenameArr[i].length-4));
    };
    callback(resArr);
  });
};

// node .\models\file.js 进行单元测试
// getAllFilesName(function (arr) {
    // console.log('arr:', arr);
// });


// 读取文件内容，文件内容通过callback传
// var read =  
exports.read = function (shoujihao,callback) {
  fs.readFile(baseurl+"/"+shoujihao+".txt",function (err,data) {
    if(err){
      // 文件不存在
      callback("-1");
      return;
    }
    callback(data.toString());
  })
};

// read("1112",function (data) {
//   if(data==-1) {
//     console.log("文件不存在")
//   } else {
//     console.log('data:', data);

//   }
// });