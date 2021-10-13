(function Module(w) {
    //内部封装方法
    var str = "kipkips";

    function toUpper() {
        console.log(str.toUpperCase());
    }

    function toLower() {
        console.log(str.toLowerCase());
    }
    //向外暴露接口
    w.Module = {
        toUpper: toUpper,
        toLower: toLower,
    }
})(window);