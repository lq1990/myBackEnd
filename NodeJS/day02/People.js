function People(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

People.prototype.sayHello = function () {
    console.log("hello, I am "+this.name+ " "+this.age + " "+this.sex);
}

// exports.People = People; // 这样暴露的缺点是：使用者需要用 new xxx.People()这样写，很麻烦

module.exports = People; // 这种方式就使得 调用者可直接 new People()

