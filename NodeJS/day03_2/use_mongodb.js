var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/xuesheng";

MongoClient.connect(url,function (err,db) {
    if(err) {
        console.log("连接db失败！");
        return;
    }
    console.log("成功连接db！");

    db.collection("banji").find(
        {"age":{$gt: 15}, "province":"广州"}
    ).toArray(function (err,arr) {
        console.log('arr:', arr);

        db.close();
    });
})