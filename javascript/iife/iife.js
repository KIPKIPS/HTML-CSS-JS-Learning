window.onload = function() {
    //IIFE 立即执行函数
    //隐藏实现
    //不会污染外部命名空间
    (function() {
        console.log("??");
    })();

    //向外暴露一个全局函数
    //编写js模块
    (function() {
        var a = 1;

        function test() {
            console.log(++a);
        }
        window.$ = function() {
            return {
                test: test,
            }
        }
    })()
    //$函数名,执行后返回一个对象,对象的test属性是test方法
    $().test();
    var obj = {}
    obj.func = function() {
        console.log(this);
    }
    obj.func(); //obj
    var a = obj.func
    a(); //直接调用 没有指定this 为window
    //this?
    //任何函数本质上都是通过某个对象来调用的,如果没有直接指定就是window
    //所有函数内部都有一个this变量
    //它的值是调用函数的当前对象

    //this的值
    //fun() //window
    //obj.fun() //obj
    //new obj() //创建的对象
    //a.call(obj) //指定为obj
}