window.onload = function() {
    //js实现继承
    //<1>.原型链实现继承
    //  1.定义父类的构造函数
    //  2.给父类的原型添加方法
    //  3.定义子类的构造函数
    //  4.创建父类型的对象赋值给子类的原型
    //  5.将子类型原型的构造方法属性设置为子类型
    //  6.给子类型的原型添加方法
    //  7.创建子类型的对象,可以调用父类的方法
    //<2>关键
    //  1.子类型的对象为父类型的一个实例对象

    //父类
    function Supper() {
        this.supProp = "Supper property"
    }
    //父类方法
    Supper.prototype.showSupperProperty = function() {
        console.log(this.supProp);
    };
    //子类
    function Sub() {
        this.subProp = "Sub property"
    }
    //关键点
    Sub.prototype = new Supper(); //子类型的对象为父类型的一个实例对象
    //子类方法
    Sub.prototype.showSubProperty = function() {
        console.log(this.subProp);
    };
    var sub = new Sub();
    sub.showSupperProperty();
    sub.showSubProperty();
}