window.onload = function() {
    function bind(obj, eventStr, callback) {
        //大部分浏览器兼容的方式
        if (obj.addEventListener) {
            obj.addEventListener(eventStr, callback, false);
        } else {
            //ie8及以下
            obj.attachEvent("on" + eventStr, function() {
                callback.call(obj);
            });
        }
    }
    //window 浏览器的窗口,同时也是网页中的全局对象
    //navigator 代表整个浏览器的信息,该对象可以用来识别不同的浏览器
    //location 浏览器的地址栏信息,可以获取地址栏信息也可以跳转界面
    //history 浏览器的历史记录,可以通过该对象来操作浏览器的历史记录,由于隐私问题,获取不到浏览器的历史记录,只能操作浏览器前后翻页,且只在当前访问有效
    //screen 用户屏幕的信息,获取显示器相关信息

    //上述对象都是作为window的属性来保存
    // navigator大部分属性都已经不能识别浏览器
    var ua = navigator.userAgent;
    console.log(ua);
    if (/Chrome/.test(ua)) {
        console.log("谷歌浏览器");
    }

    // history.go(-1);
    // copy();

    // function copy() {
    //     const input = document.createElement("input");
    //     document.body.appendChild(input);
    //     input.setAttribute("value", this.solution.code);
    //     input.select();
    //     if (document.execCommand("copy")) {
    //         document.execCommand("copy");
    //         // console.log("复制成功");  
    //     }
    //     document.body.removeChild(input);
    // }
};