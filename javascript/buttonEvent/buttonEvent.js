window.onload = function() {
    var btn = document.getElementById("button");
    bind(btn, "click", function() {
        console.log(this);
    })

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
    //事件的委派
    var ulNode = document.getElementById("ul");

    var btn = document.getElementById("add");
    console.log(ulNode.childNodes);
    var num = 3;
    bind(btn, "click", function() {
        num++;
        var li = document.createElement("li");
        li.setAttribute("class", "link")
        li.innerHTML = num;
        ulNode.appendChild(li);
    });
    bind(ul, "click", function(event) {
        event = event || window.event;
        if (event.target.className == "link") {
            console.log(event.target);
        }
    });
    //事件的传播
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    bind(box1, "click", function() {
        console.log("box1");
    });
    bind(box2, "click", function() {
        console.log("box2");
    });
    bind(box3, "click", function() {
        console.log("box3");
    });
    //捕获阶段,目标元素从最外层向内层捕获,但是默认不触发
    //目标阶段,捕获结束,在目标元素上开始触发
    //冒泡阶段,事件从目标元素向其他祖先元素传递,依次触发祖先元素的事件

    //若希望在捕获阶段触发时间,将addEventListener第三个参数设置为true
};