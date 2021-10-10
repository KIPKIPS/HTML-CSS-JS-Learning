var arr = new Array();
arr[0] = 10;
arr[1] = function() {
    console.log("3");
};
arr[3] = 20;
// console.log(arr);
// console.log(arr.length);

var arr1 = new Array(1, 2, 3, 4);
var arr2 = [1, 2, 3];
// console.log(arr1);
// console.log(arr2);

var arr3 = new Array(10); //长度为10的数组
var arr4 = [10]; //字面量创建,数组第一个元素为10
// console.log(arr3);
// console.log(arr4);

//foreach需要 回调函数,并且数组的轮询值会作为参数传递进来
// arr2.forEach(function(element, index, arr) {
//     //元素,索引,正在遍历的数组
//     console.log(element, index, arr);
// });


///slice 和 splice
// var arr5 = [1, 2, 3, 4, 5];
//截取索引1-2到新数组,包含开始索引1,不包含结尾索引3
//不会影响原数组
// var newArr = arr5.slice(1, 3);
// console.log(newArr);
//截取索引1-3到新数组,包含开始索引1,包含结尾索引3
//会影响原数组
// var newArr2 = arr5.splice(1, 3);
// console.log(arr5, newArr2);


var arr6 = [1, 2, 3, 4, 5];
//第三个参数代表在该位置区间添加的元素
//替换
var arr7 = arr6.splice(1, 3, "????", "xxx");
console.log(arr6);


//sort
var arr8 = [1, 3, 4, 2, 5];
//a在b之前,返回值大于一交换,小于不交换
arr8.sort(function(a, b) {
    if (a >= b) {
        return -1;
    }
    return 1;
});
console.log(arr8);


var obj = {};

function fun() {
    console.log(this);
}
//apply和call和直接调用函数效果是一样的,apply和call可以传递参数进去,指定为this
fun.apply(obj);
fun.call(obj);

function fun1() {
    //arguments是参数列表的封装对象
    console.log(arguments.length);
    console.log(arguments[0]);
    //callee是当前函数对象
    // console.log(arguments.callee);
    // arguments.callee();//会无限递归调用
}
fun1("aaa", "sadf");