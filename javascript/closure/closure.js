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
}