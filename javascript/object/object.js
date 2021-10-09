// 1.内建对象 
// Math String Number Bollean Function Object
// 2.宿主对象
// js运行环境提供的对象 Bom DOM,document等,浏览器对象
// 3.自定义对象
// var obj = new Object(); //g构造对象
// obj.name = "kipkips";
// console.log(obj);

//基本数据类型
// number string boolean null undefined
//引用数据类型
// object


// var obj = {
//     name: "kipkips",
//     sayName: function() {
//         console.log(this.name)
//     }
// }
// obj.sayName();

//工厂模式生产对象
function createObj(_name) {
    var obj = new Object();
    obj.name = _name;
    obj.sayName = function() {
        console.log(this.name);
    }
    return obj;
}
var obj1 = createObj("obj1");
var obj2 = createObj("obj2");
var obj3 = createObj("obj3");
obj1.sayName();
obj2.sayName();
obj3.sayName();

//工厂模式创建的对象类型都是object,无法区分类型