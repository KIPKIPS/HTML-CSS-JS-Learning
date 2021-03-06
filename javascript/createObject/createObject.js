window.onload = function() {
    // 创建构造函数
    /*
        构造函数的流程
        1.立刻创建一个新对象
        2.将新建对象设置为函数的this
        3.执行函数中的代码
        4.将新对象作为返回值返回

    */
    function Person(_name) {
        this.name = _name;
        this.sayName = function() {
            console.log(this.name);
        }
    }

    function Dog(_name) {
        this.name = _name;
    }
    var kipkips = new Person("kipkips"); //构造函数的调用
    // var p = Person(); //直接调用,p = Person函数的返回值,undefined
    // console.log(kipkips);
    // console.log(p);
    kipkips.sayName();
    var dog = new Dog();
    // instanceof 检查一个对象是否是一个类的实例
    console.log(kipkips instanceof Person, dog instanceof Person);

    //上述构造方法创建的实例对象内的方法都是唯一的,执行一次构造函数,就会创建一个方法
    var k1 = new Person("k1");
    var k2 = new Person("k2");
    console.log(k1.sayName == k2.sayName); //false
    //内存浪费,改进,将对象方法放到全局作用域 如下
    function NewPerson(_name) {
        this.name = _name;
        this.sayName = sayName;
    }

    function sayName() {
        console.log(this.name);
    }
    var k3 = new NewPerson("k3");
    var k4 = new NewPerson("k4");
    console.log(k3.sayName == k4.sayName); //false

    //上述优化节省了空间,但是却将方法放到了全局作用域,污染了全局作用域的命名空间,使用原型

    //工厂模式
    function createPerson(name, age) {
        var obj = {
            name: name,
            age: age,
            setName: function(_name) {
                this.name = _name;
            },
        }
        return obj;
    }
    var p1 = createPerson("p1", 13);
    console.log(p1);
    p1.setName("new p1");

    //构造函数 + 原型的组合模式创建对象
    function Class(name, age) {
        this.name = name;
        this.age = age;
    }
    Class.prototype.setName = function(_name) {
        this.name = _name;
    }
    var c1 = new Class("c1", 150);
    var c2 = new Class("c2", 12);
    c1.setName("new c1")
    console.log(c1, c2);
}