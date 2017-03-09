# project

> blog  一个前端基于Vue.js，后端基于php的博客内容管理器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Directory

```
│  .babelrc           babel配置
│  .editorconfig
│  .eslintignore  
│  .eslintrc.js       eslintrc配置
│  .gitignore
│  index.html         入口页面
│  package.json
│  README.md
│  webpack.config.js  webpack配置
│
├─dist                打包生成
│     
├─resource            文件存储
│      img/           图片存储
│
└─src
    │  main.js        项目入口
    │
    ├─assets          外部引用文件
    │  ├─css
    │  ├─fonts
    │  ├─img
    │  └─js         
    │
    ├─components      vue组件
    │  ├─footer       公用底部
    │  ├─navbar       公用导航
    │  ├─silder       首页轮播组件
    │  ├─work         作品页面/首页
    │  ├─workArticle  作品详情页面
    │  └─plugins      公共组件/axios请求api设置
    │
    ├─router          路由
```

###### 前端：Vue.js2.0
* Vue.js
* Vue-Router
* Vue-axios
* Vue-lazyload
* Element Ui

###### 工具和语言
* Webpack
* ES6
* SASS