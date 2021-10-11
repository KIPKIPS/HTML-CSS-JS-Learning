# HTML Javascript CSS Jquery
HTML Javascript CSS Jquery Less学习笔记
Zeal安装和离线文档的导入教程:http://tokyo.kapeli.com/feeds/JavaScript.tgz
语言为可替换项,下载离线API文档包,安装导入,将下载好的文件解压导入 C:\admin\AppData\Local\Zeal\Zeal\docsets

* **Font_Awesome:** http://tokyo.kapeli.com/feeds/Font_Awesome.tgz
* **CSS:** http://tokyo.kapeli.com/feeds/CSS.tgz
* **JavaScript:** http://tokyo.kapeli.com/feeds/JavaScript.tgz
* **Less:** http://tokyo.kapeli.com/feeds/Less.tgz
* **HTML:** http://tokyo.kapeli.com/feeds/HTML.tgz
* **Jquery:** http://tokyo.kapeli.com/feeds/jQuery.tgz
* **PHP:** http://tokyo.kapeli.com/feeds/PHP.tgz
* **Unity3D:** http://tokyo.kapeli.com/feeds/Unity_3D.tgz
* **C:** http://tokyo.kapeli.com/feeds/C.tgz
* **.Net Framework:** http://tokyo.kapeli.com/feeds/NET_Framework.tgz
* **Lua:** http://frankfurt.kapeli.com/feeds/Lua_5.4.tgz

#### Less import其他文件时,若需要调试,由于网页加载的是css的文件,所以不能准确定位到less文件的代码行数,所以需要一个css和less文件的映射图

Easy Less 插件设置映射的方法,Setting -> Extensions -> Easy Less -> 在settings.json中编辑
加入如下json代码

* **compress** true 压缩,移除空格
* **compress** true 生成less到css的映射表
* **compress** true 生成css文件
```json
"less.compile": {
    "compress": false,
    "sourceMap": true, 
    "out": false,
}
```

### 常用DOM方法总结
* getElementById()    返回带有指定ID 的元素。
* getElementsByTagName()  返回包含带有指定标签名称的所有元素的节
* 点列表(集合/节点数组)。
* getElementsByClassName()    返回包含带有指定类名的所有元素的节
点列表。
* getElementsByName(a) 通过name属性获取一组元素节点对象
* document.querySelector(#a) 通过CSS选择器来获取一个元素节点对象
* document.querySelectorAll(span) 通过CSS选择器来获取一组元素节点对象
* appendChild()   把新的子节点添加到指定节点。
* removeChild()   删除子节点。
* replaceChild()  替换子节点。
* insertBefore()  在指定的子节点前面插入新的子节点。
* createAttribute()   创建属性节点。
* createElement() 创建元素节点。
* createTextNode()    创建文本节点。
* getAttribute()  返回指定的属性值。
* setAttribute()  把指定属性设置或修改为指定的值。
* 当前节点.paretNode   表示当前节点的父节点
* 当前节点.previousSibling 表示当前节点的前一个兄弟节点
* 当前节点.nextSibling 表示当前节点的后一个兄弟节点
* 父节点.firstchild 可以获取第一个子节点(包括空白文本节点)
* 父节点.firstElementchild 可以获取第一个子元素(不包括空白文本节点)
* 父节点.childNodes 表示当前节点的所有子节点
### 正则表达式
```javascript
// 边界表达式
// ^:正则开始
// $:正则结束 ：注意结束前一个才是结束匹配

reg = /^a/;  
reg = /b$/;

// test()
// 可以用来检查一个字符串是否符合正则表达式
// 如果符合返回true，否则返回false
var s = "        	f    afa    ";   
s = s.replace(/^\s*|\s*$/g,"");
```
### History
对象可以用来操作浏览器向前或向后翻页
* length
属性，可以获取到当成访问的链接数量
* back()
可以用来回退到上一个页面，作用和浏览器的回退按钮一样
* forward()
可以跳转下一个页面，作用和浏览器的前进按钮一样
* go()
可以用来跳转到指定的页面
它需要一个整数作为参数
1:表示向前跳转一个页面 相当于forward()
2:表示向前跳转两个页面
-1:表示向后跳转一个页面
-2:表示向后跳转两个页面
### Location
该对象中封装了浏览器的地址栏的信息
如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）
* location
如果直接将location属性修改为一个完整的路径，或相对路径,则页面会自动跳转到该路径，并且会生成相应的历史记录
location = “http:www.baidu.com";
location = “01.BOM.html”;
* assign();
用来跳转到其他的页面，作用和直接修改location一样
* reload();
用于重新加载当前页面，作用和刷新按钮一样
如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面
location.reload(true);
* replace();
可以使用一个新的页面替换当前页面，调用完毕也会跳转页面
不会生成历史记录，不能使用回退按钮回退