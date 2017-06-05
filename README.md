# 技术栈

- [x] React
- [x] React router
- [x] Redux
- [x] Redux Thunk
- [x] Immutable reducer data
- [x] Webpack 2 (development and production config)
- [x] Hot Module Replacement
- [x] Babel - static props, decorators
- [x] SASS with autoprefixing


## 开始使用

node版本 > 6.x

```
$ npm install 或者 yarn install
```

## 启动开发模式

```
$ npm start
```

浏览器打开`http://localhost:3000/`


### 通过[webpack dashboard]启用

```
$ npm run dev
```

## 构建 (production)

构建完成后会自动生成 `build` 目录

```
$ npm run build
```
如果线上环境的路径改变的话可以在`webpack.config.js`修改`publicPath`


```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

还有在 `source/js/routes`:

```
const publicPath = '/your-app/';
```

## Redux 流程

![Alt text](https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1667620917,557709590&fm=23&gp=0.jpg)



## 目录结构说明

```bash
.
├── src                              # 源代码目录
│   ├── assets                       # 静态资源目录
│   ├── js                           # js目录
│   │   ├── components               # 模块目录
│   │   │   ├── Common               # 公共组件
│   │   │   └── Global               # 全局组件
│   │   ├── dev                      # 本地开发配置
│   │   ├── locale                   # 多语言文件包
│   │   ├── utils                    # 功能函数目录
│   │   ├── views                    # 页面组件目录
│   │   ├── index.js                 # 入口文件
│   │   └── routes.js                # 路由配置文件
│   ├── mock                         # 虚拟数据目录
│   ├── scss                         # 全局样式目录
│   └── main.js                      # 入口文件
├── README.md
├── webpack.config.js                # webpack配置文件
└── package.json                     # package.json

```
## 说明
关于多语言，在`locale`目录中配置对应的语言包，在组件中使用[react-intl]库中的`FormattedMessage`组件即可，⚠️添加新语言同时需要在`components/Global/SwitchLanguage.jsx`文件中添加对应的`data-lan`属性