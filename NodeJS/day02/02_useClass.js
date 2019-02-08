var mt = require("./af/test");
var People = require("./People");
// console.log('People:', People);

var p1 = new People("anna", "girl", 11);
var p2 = new People("beta", "girl", 21);
var p3 = new People("cello", "boy", 31);
p1.sayHello();

var mean_age = mt.mean(p1.age, p2.age,p3.age);
console.log('mean_age:', mean_age);