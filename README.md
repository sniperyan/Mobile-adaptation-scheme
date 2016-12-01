# Mobile-adaptation-scheme
移动端适配解决方案,改编于阿里的[flexible.js](https://github.com/amfe/lib-flexible)

## 主要实现了以下几个功能点
1. 利用rem适配移动端页面
1. 部分安卓机会不支持initial-scale=0.5这种类似的缩放，只支持initial-scale=1，所以需要判断，如果是安卓机，就不做高清设备的优化，ios机型，需要做高清缩放适配
1. 利用`gulp-px2rem`插件将px全部转换成rem单位
