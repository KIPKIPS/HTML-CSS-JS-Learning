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
console.log(c1.__proto__ == c2.__proto__);

Class.prototype.kip = "kips"; //向构造类中的prototype添加字段
//实例也可以访问到
console.log(c1.kip); //目前没有kip字段,去原型找,找到了 kips
c1.kip = "c1的kip";
console.log(c1.kip); //c1有kip字段,优先访问c1的kip字段

Class.prototype.sayHello = function() {
    console.log("hello")
};
//检测c1中是否有sayHello属性
console.log("sayHello" in c1); //true,因为原型有
c1.sayHello();

//检测c1 自身 中是否有sayHello属性
console.log(c1.hasOwnProperty("sayHello")); //false,因为c1没有,即便原型有也为false

function newClass() {

}
newClass.prototype.test = function() {
    console.log("test方法");
}
var obj = new newClass();
obj.test();