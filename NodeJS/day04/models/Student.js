var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    sid: Number,
    name: String,
    courses: [Number] // 此学生报名的课程的编号
});

studentSchema.statics.findStudentBySid = function (sid, cb) {
    this.find({sid: sid},function (err,r) {
        cb(r);
    });
};

var Student = mongoose.model("Student", studentSchema);

module.exports = Student;