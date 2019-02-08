var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ceshi');

var peopleSchema = new mongoose.Schema({
  name: String,
  sex: String,
  age: Number,
  hobby: [String],
  scores: { shuxue: Number, yuwen: Number },
  nationality: { type: String, default: '汉' }
});

// 封装一个方法，寻找有指定爱好的人
peopleSchema.statics.findByHobby = function(hobby, cb) {
  var res = [];
  // 寻找所有的人，然后筛选。对一个属性值时数组，我们要进行筛选，只能这样。
  this.find({}, function(err, r) {
    r.forEach(item => {
      if (item.hobby.includes(hobby)) {
        res.push(item);
      }
    });

    cb(res);
  });
};

peopleSchema.statics.findShuxueJige = function() {
  this.find({ 'scores.shuxue': { $gte: 70 } }, function(err, results) {
    console.log(results);
  });
};

peopleSchema.statics.findNvhanzi = function() {
  this.find({ 'scores.shuxue': { $gte: 60 }, sex: '女' }, function(err, r) {
    console.log('r:', r);
  });
};

peopleSchema.statics.findli = function () {
    this.find({"name": /李/g}, function (err,r) {
        console.log('r:', r);

        
    })
};

peopleSchema.methods.sayHi = function() {
  console.log('我是' + this.name + ', 我是' + this.sex + '人');
};

var People = mongoose.model('People', peopleSchema);

// People.findByHobby("游泳",function (res) {
//     // console.log('res:', res);
//     res.forEach(item=>{
//         item.sayHi();
//     })
// })

People.findli();
