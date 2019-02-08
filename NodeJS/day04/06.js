var mongoose = require("mongoose");
var Course = require("./models/Course");
var Student = require("./models/Student");
var tool = require("./models/tool");

mongoose.connect("mongodb://localhost/xuanke");

// 选课
tool.xuanke(100003,5);
tool.xuanke(100003,48); // 目前不鲁棒