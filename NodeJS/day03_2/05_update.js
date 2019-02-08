// 引用 mongodb
var MongoClient = require('mongodb').MongoClient;

// Connection URL，若数据库不存在会被创建
var url = 'mongodb://localhost:27017/xuesheng';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('db连接失败！');
    console.log('mongod --dbpath c:mydatabase');
    return;
  }

  console.log('db连接成功!');
  // 对db操作写在下面
  db.collection('banji1120').updateOne(
    {
      xingming: '刘备'
    },
    {
      $set: { age: 45 }
    },
    function(err, result) {
      // result 是所有的数据库变动信息，
      // 常用的 result.insertedCount， 为插入的条目数量
      if (err) {
        console.log('find数据失败！');
        return;
      }
      console.log('成功更改了数据！');

      // 关闭数据库
      db.close();
    }
  );
});
