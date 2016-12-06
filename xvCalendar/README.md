## **日期插件 / xvCalendar**##
<br>
***
<br>
一款你值得拥有的原生js日历插件（该插件皮肤以及结构布局来自于网上）
 本插件为原生js 无须依靠第三方插件( 需要引入calendar.js 和 calendar.css)

本日历插件支持cmd模块化)

<br>
***

### 参数配置说明###

 - **targetId：**  日期写入对象的id，不能为空
 - **triggerId：** 触发事件的对象id，不能为空,和你触发的对象保持一致
 - **alignId：** 日历盒子的对齐基准，如果不设置则默认为targetId
 - **hms：** 时分秒是否开启，默认值为'on'则表示开启时分秒(2014-09-20 10:00:00),'off'则表示关闭时分秒模式(2014-09-20)
 - **format：** 为日期格式 默认值为'-' (2014-09-20),'/'则表示(2014/09/20)
 - **min：** 最小时间限制，min 的时间格式和前面的时间格式保持一直
 - **max：** 最大时间限制，max 的时间格式和前面的时间格式保持一直
 - **zIndex：** 最大时间限制，日历盒子的层级，默认9999
 **如果需要使用模块化在需要依赖的模块用引入即可**
**如下：**
```
define('mod1',[],function(require, exports, module){
        var xvDate = require("xvDate");
    })
```
<br>

### 使用###

<br>
请参考下载index.html页面