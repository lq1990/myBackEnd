/**
 * 这是一个函数，功能：让上下文对象的a属性变为100.
 * 这个函数到底给谁的a属性变为了100，此时不知道。
 * 要看函数调用的时候指定的上下文是谁。
 */
function fun() {
  this.a = 100;
}

/**
 * 此函数功能：让上下文对象的a属性变为传入参数的和。
 * @param {*} m 
 * @param {*} n 
 */
function fun2(m,n) {
    this.a = m+n;
}

var xiaoming = {
  a: 8,
  b: 9
};

var xiaohong = {
  a: 10,
  b: 3
};

// =====================call, apply=================================
// 运行fun函数，同时执行xiaoming对象是fun函数的上下文。
// 通过fun把 xiaoming的a改为100
// fun.call(xiaoming);
fun.apply(xiaoming);

// console.log('xiaoming:', xiaoming);
// console.log('xiaohong:', xiaohong);

// ==========================================================
// fun2.call(xiaoming,20,30);
fun2.apply(xiaoming,[22,33]);
// console.log('xiaoming:', xiaoming);


// ===================== 应用 =======================
function cook() {
    for(var i=0;i<arguments.length;i++) {
        console.log("我是厨子，我要做 "+arguments[i]);
    }
}

// cook("宫保鸡丁","鱼香肉丝","地三鲜");

/**
 * 代理函数。
 * 引入服务员函数，服务员函数目的：原封不动的将自己的参数传给厨子函数。
 */
function waiter() {
    // cook(...arguments); 此函数等价于下面的。
    cook.apply(null, arguments); 
    // 第一个参用于指定上下文，但是cook中没有this，不用指定上下文。
    // 用apply的话，arguments会有 ...arguments的功能。
}

waiter("宫保鸡丁","鱼香肉丝","地三鲜");