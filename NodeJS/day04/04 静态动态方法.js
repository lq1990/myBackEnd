var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ceshi");

// 创建一个schema
var peopleSchema = new mongoose.Schema({
    name: String,
    sex: String,
    age: Number,
    hobby: [String],
    scores: {yuwen:Number, shuxue: Number},
    nationality: {type: String, default: "汉"}
});

// 在 peopleSchema 对象上定义静态方法，静态方法要定义在schema上。
peopleSchema.statics.findByName = function (name, callback) {
    // 静态方法中this指代数据表peoples
    this.find({name: name}, function (err,results) {
        // console.log('results:', results);
        callback(results);
    });
};

peopleSchema.statics.changeSexByName = function (name) {
    this.find({
        name:name
    },function (err,r) {
        if(r.length==0) return;
        // 返回的r数组中全都是People类的实例。
        var someone = r[0];
        someone.changeSex(); // 静包动
        // if(someone.sex=="男"){
        //     someone.sex = "女"
        // } else {
        //     someone.sex = "男"
        // }
        // // 持久化。这里不是新增。而是原地更改。
        // someone.save();
    })
};

peopleSchema.methods.sayHello = function () {
    // this 指代实例
    console.log("hello, ");
    console.log('this.name:', this.name);
    console.log('this.sex:', this.sex);
    console.log('this.age:', this.age);
};

peopleSchema.methods.changeSex = function () {
    // this 指代实例
  if(this.sex=="男"){
      this.sex = "女";
  }  else {
      this.sex = "男"
  }
  this.save();
};

// 创建一个类，mongoose的model
var People = mongoose.model("People", peopleSchema);

// 静包动
People.findByName("anna",function (r) {
    var sb = r[0];
    sb.sayHello();
});
People.changeSexByName("anna");

