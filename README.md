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



## 组件

