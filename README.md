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

```json
"less.compile": {
    "compress": false, // true => remove surplus whitespace --是否压缩
    "sourceMap": true, // true => generate source maps (.css.map files) -- 源码映射表
    "out": false // false => DON'T output .css files (overridable per-file, see below) 是否生成css文件
}
```
