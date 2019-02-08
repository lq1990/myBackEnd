var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/xuesheng';

function getAllStudent(callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('连接数据库失败！');
      return;
    }
    console.log('链接数据库成功！');

    // 检索所有人
    db.collection('banji')
      .find({})
      .toArray(function(err, arr) {
        callback(arr); // 把db中数据通过callback函数 回传
        db.close();
      });

      // .toArray() 之后，最原始的数据会被变声array，回油管逗号分隔
  });
};

// 增加数据
function addStudent(json, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('连接数据库失败！');
      return;
    }
    console.log('链接数据库成功！');

    // 检索所有人
    db.collection('banji').insertOne(json, function (err,r) {
      if(err){
        console.log("failed");
        callback("-1");
        return;
      }
      callback("1");
      db.close();
    });

      // .toArray() 之后，最原始的数据会被变声array，回油管逗号分隔
  });
};

exports.getAllStudent = getAllStudent;
exports.addStudent = addStudent;

// =============== 单元测试 ====================
// getStudent(function (arr) {
//     console.log('arr:', arr);
// });
