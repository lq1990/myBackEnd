/**
 * 第三方对象tool，负责协调双方
 */

var Course = require('./Course');
var Student = require('./Student');

exports.xuanke = function(sid, cid) {
  /**
   * 通过cid找到这个课程，再往这个课程的 students中添加sid
   */
  Course.findCourseByCid(cid, function(results) {
    if (results.length == 0) {
      console.log('没有这门课！' + cid);
      hasCid = false;
      return;
    }
    var acourse = results[0];
    if (!acourse.students.includes(sid)) {
      acourse.students.push(sid);
      acourse.save();
    }
  });


  /**
   * 通过sid找到这个学生，再往这个学生的 courses添加cid
   */
  Student.findStudentBySid(sid, function(results) {
    if (results.length == 0) {
      console.log('没有这个学生！' + sid);
      return;
    }
    var astudent = results[0];
    if (!astudent.courses.includes(cid)) {
      astudent.courses.push(cid);
      astudent.save();
    }
  });
};
