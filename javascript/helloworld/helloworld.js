// var i = "helloworld";
// console.log(i);
// // 向文档中输出内容
// document.write("hello hello testing,this is kipkips");
// console.log(typeof(1));
// console.log(typeof("sdfs"));
// console.log(typeof(null));
// console.log(typeof(undefined));

// 类型转换
var a = 13;
//方式1 
var b = "12";
// console.log(a.toString());
// 转换成number
// console.log(Number(b));

//其他进制的数字
// 16进制0x开头
var a = 0x13;
// console.log(a); //把十六进制的13转换成了十进制

// 8进制0开头
var a = "070";
a = parseInt(a, 8); //按照8进制处理
// console.log(parseInt(a))
console.log(a)

//二进制 0b开头,并不是所有浏览器都支持

//转换成bool
//number
var a = 13;
console.log(Boolean(a))
var a = 0;
console.log(Boolean(a))
var a = Infinity; //无穷大
console.log(Boolean(a))
var a = NaN;
console.log(Boolean(a))
var a = undefined;
console.log(Boolean(a))

console.log("--------------");
//除了空串 都是true
//string
// var a = "true";
// console.log(Boolean(a))
// var a = "false";
// console.log(Boolean(a))
// var a = "";
// console.log(Boolean(a))
// var a = " ";
// console.log(Boolean(a))
// var a = "asdfsg";
// console.log(Boolean(a))
// var a = "undefined";
// console.log(Boolean(a))
// var a = "NaN";
// console.log(Boolean(a))
// var a = "0";
// console.log(Boolean(a))