window.onload = function() {
    var btns = document.getElementsByTagName("button");
    //1 错误的索引
    // for (var i = 0, length = btns.length; i < length; i++) {
    //     var obj = btns[i];
    //     obj.onclick = function() {
    //         console.log("this is " + (i + 1) + " button");
    //     }
    // }
    //改为局部let
    // for (let i = 0, length = btns.length; i < length; i++) {
    //     var obj = btns[i];
    //     obj.onclick = function() {
    //         console.log("this is " + (i + 1) + " button");
    //     }
    // }
    //闭包
    for (var i = 0, length = btns.length; i < length; i++) {
        (function(i) {
            var obj = btns[i];
            obj.onclick = function() {
                console.log("this is " + (i + 1) + " button");
            }
        })(i);
    }
    //如何产生闭包?
    //当内部(子)函数引用了外部(父)函数的变量,就产生了闭包
    //闭包是什么?
    //使用chorme调试查看,闭包存在于嵌套的内部函数中
    //1.闭包是嵌套的内部函数
    //2.包含被引变量(函数)的对象

    //产生闭包的条件
    //1.函数嵌套
    //2.内部函数引用了外部函数的变量
    // function f1() {
    //     var a = 2;

    //     function f2() {
    //         console.log(a);
    //     }
    // }
    // f1();

    //常见的闭包
    //1.将函数作为另一个函数的返回值
    function f1() {
        var a = 2;

        function f2() {
            a++;
            console.log(a);
        }
        return f2;
    }
    var f = f1();
    f(); //3
    f(); //4

    //2.将函数作为实参给另一个函数调用
    function showDelay(time, callback) {
        setTimeout(callback, time);
    }
    showDelay(2000, function() {
        console.log("msg");
    });
    //闭包的作用
    //1.使得函数内部的变量在函数执行完成后,仍然存活在内存中(延长了局部变量的生命周期)
    //2.函数外部的变量可以操作(读写)函数内部的数据(变量/函数)

}