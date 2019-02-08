exports.calc = function(num) {
  var resList = [];
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      resList.push(i);
    }
  }
  return resList;
};
