var mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
    cid: Number,
    name: String,
    students:[Number]// 报名这个课程的所有学生的学号
});

courseSchema.statics.findCourseByCid = function (cid, cb) {
    this.find({cid: cid},function (err,results) {
        cb(results);
    })
};

var Course = mongoose.model("Course", courseSchema);

module.exports = Course;