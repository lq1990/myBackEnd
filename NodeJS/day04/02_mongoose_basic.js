// 引入 mongoose, mongoose自动有mongodb
var mongoose = require('mongoose');

// 链接数据库，端口号不用写，最后的反斜杠是数据库名字
mongoose.connect('mongodb://localhost/ceshi');

// 创建一个模型，是一个类。
// 此时传入的第一个参数将自动被小写，末尾加s，变为集合名字。
// 第二个参数是schema，就是字段列表。用kv对表示字段名字和类型。
var Student = mongoose.model('Student', {
  sname: String,
  sex: String,
  age: Number,
});

// 实例化对象
var xiaoming = new Student({
    sname: "小明",
    sex: "male",
    age: 12
});

// 保存对象
xiaoming.save();

// 就会创建 ceshi数据库，students集合，里面存储 json