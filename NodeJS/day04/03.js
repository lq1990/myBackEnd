var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ceshi");

// 创建一个schema
var peopleSchema = new mongoose.Schema({
    name: String,
    sex: String,
    age: Number,
    hobby: [String],
    scores: [{subject:String, score: Number}],
    nationality: {type: String, default: "汉"}
});

// 创建一个类，mongoose的model
var People = mongoose.model("People", peopleSchema);

// 实例化
var xiaohong = new People({
    name: "小红",
    sex: "女",
    age: 15,
    hobby: ["游泳","画画"],
    scores: [
        {subject:"语文", score: 60},
        {subject:"数学", score: 70},
        {subject:"英语", score: 80}
    ]
});

xiaohong.save(function (err) {
    console.log('err:', err);
});