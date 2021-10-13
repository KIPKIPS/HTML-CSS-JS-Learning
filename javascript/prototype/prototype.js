//每一个函数创建时,解析器都会想函数中添加一个prototype
//这个属性对应着一个对象,这个对象是原型对象
function Person(_name) {
    this.name = _name;
}

function Class() {}
//所有类以及类的实例都会有一个隐含对象,指向同一个对象
//这个原型对象相当于一个公共的区域,同一个类的实例都可以访问(__proto__字段),可以将对象中共有的内容,统一设置到原型对象中
var c1 = new Class();
var c2 = new Class();
//console.log(c1.__proto__ == c2.__proto__);

Class.prototype.kip = "kips"; //向构造类中的prototype添加字段
//实例也可以访问到
//console.log(c1.kip); //目前没有kip字段,去原型找,找到了 kips
c1.kip = "c1的kip";
//console.log(c1.kip); //c1有kip字段,优先访问c1的kip字段

Class.prototype.sayHello = function() {
    console.log("hello")
};
//检测c1中是否有sayHello属性
//console.log("sayHello" in c1); //true,因为原型有
//c1.sayHello();

//检测c1 自身 中是否有sayHello属性
//console.log(c1.hasOwnProperty("sayHello")); //false,因为c1没有,即便原型有也为false

function newClass() {

}
newClass.prototype.test = function() {
    console.log("test方法");
}
var obj = new newClass();
//obj.test();


//显示原型属性
// newClass.prototype
//隐式原型属性
//new.__proto__
//每个函数function都保存一个prototype,即显示原型,默认指向一个空的Object对象
//每个实例都一个__proto__属性,即隐式原型

function Fn() {

}
var fn = new Fn();
//指向同一个地址
console.log(fn.__proto__ === Fn.prototype);
Fn.prototype.test = function() {
    console.log("原型方法");
}
Fn.prototype.name = "Fn"
fn.test();
console.log(fn.name);
fn.name = "fn";
fn.test = function() {
    console.log("实例对象的方法")
}
fn.test();
console.log(fn.name);


//原型链
//访问一个对象的属性时,先在自身的属性中查找,找到返回
//找不到在__proto__向上查找,找到返回
//最终还是没有找到,返回undefined