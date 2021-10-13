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
    function f1() {
        var a = 2;

        function f2() {
            console.log(a);
        }
    }
    f1();
}