## 功能
全局注入事件,判断网络是否正在请求.
由于异步事件导致dom元素没有渲染的事,导致自动化测试总是出错...
 - 加延时(依然出错)
 - webdriver 加 until (要加很多)
 


## 插件开发
web-ext 用来快速启动

## 公共API
firefox 和chrome有很多公共API
兼容Firefox 和Chrome

## usage

    window.COUNT_OF_NETWORK_ACTIVE 

 "permissions": [
    "webRequest",
    "*..."
  ]