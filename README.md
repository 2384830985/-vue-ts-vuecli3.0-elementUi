# 仿有赞后台+vue+ts+vuecli3.0+elementUi
### 前言

> 最近尝试了vue+ts的组合个人感觉vue对于ts并没有特别的像angular2这样的友好，但是对于ts和js之间个人还是选择ts的。语法糖来说es6简直舒爽，下面我详细介绍下怎么使用ts+vue。**（ts+vue的插件会少上很多，但是肯定会随着vue对ts的支持插件也会越来越多**

>判断是否可以使用ts+vue是否支持[链接](https://microsoft.github.io/TypeSearch/)

## 1.VueCLI 3.0
[VueCLI 3.0](https://cli.vuejs.org/zh/guide/)
基础的可以自己尝试一下建议加上ts，这样会特别舒服，
分装了图片上传，
以及有赞喜欢的table，
分页的使用，
ts富文本编译器（这个是重点），
重制按钮的复用，
基础表单验证，
福利送上vue.config的所有配置虽然cli上面都有 （作为一个菜鸡毕竟经历众多项目可以给一些新手一点提示 QQ764506248备注（github进来的））

```
// vue.config.js
module.exports = {
    // 选项...
    // 当使用基于 HTML5 history.pushState 的路由时；
    // 当使用 pages 选项构建多页面应用时。
    baseUrl:"",
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    outputDir:"webApp",
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir:"assets",
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath:"index.html",
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing:true,
    // 多页面
    pages:undefined,
    // 编译警告
    lintOnSave:false,
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler:false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies:[],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap:false,
    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
    crossorigin:undefined,
    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
    integrity:false,
    // 反向代理
    devServer:{
        // devServer: {
        //     proxy: {
        //       '/api': {
        //         target: '1',
        //         ws: true,
        //         changeOrigin: true
        //       }
        //     }
        // }
    }
}
```

## Build Setup

``` bash
# install dependencies
npm install //下载依赖

# serve with hot reload at localhost:8080
vue ui //用vue cli3脚手架下载工具去视图画下载依赖（以及打包运行）
```

<!--![项目结构](https://user-gold-cdn.xitu.io/2018/10/14/1667229711a67e0f?w=502&h=1086&f=png&s=107921)-->
<!-->
