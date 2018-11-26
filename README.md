## 前言

最近尝试了vue+ts的组合个人感觉vue对于ts并没有特别的像angular2这样的友好，但是对于ts和js之间个人还是选择ts的。语法糖来说es6简直舒爽，下面我详细介绍下怎么使用ts+vue。ts+vue的插件会少上很多，但是肯定会随着vue对ts的支持插件也会越来越多[当前项目demo预览](https://2384830985.github.io/-vue-ts-vuecli3.0-elementUi/webApp/index.html#/system/permissionAdd)（作为一个菜鸡毕竟经历众多项目可以给一些新手一点提示 （QQ群技术讨论）838293023备注（github进来的

> 游泳健身了解一下：[`github`](https://github.com/2384830985)[`JQ插件`](http://www.tangjinjinjinjin.xyz/) [`技术文档`](https://2384830985.github.io/zhantiefuzhi/public/) 技术文档会持续更新

---

 ##  内容总结
 
 1.   vue cli3的安装。
 2.   vue config文件配置
 3.   项目结构文件搭建
 4.   路由的使用
 5.   vue cli启动以及启用下载ts 支持vue 的插件
 6.   ts aixo的使用
 7.   vue X的使用
 8.   图片上传（批量上传）//ts element的使用
 9.   分页的使用
 10.   重制按钮的分装
 11.   富文本编译器
 
 ---


## 1.VueCLI 3.0
[VueCLI 3.0](https://cli.vuejs.org/zh/) 首先安装node.js[自己百度安装](https://www.baidu.com/s?ie=UTF-8&wd=node.js)   

安装：
```
# 然后我们安装vuecli3.0 npm 或者 yarn都是可以的网上慢的小伙子可以用yarn
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
创建一个项目：
```
vue create my-project
# OR
vue ui
```


![](https://user-gold-cdn.xitu.io/2018/10/31/166c8eca906313a6?w=879&h=269&f=png&s=36391)

 1.   第一个是自己创建过的模版。   
 2.   第二个是系统默认的  
 3.   第三个自己选配置   
我这边有创建过一个，我们选红色选中的这个

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8f0faa9ab7f6?w=762&h=350&f=png&s=47087)

我们这样选择。**空格键是否选中，上下选择**

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8f2c2c84da42?w=1266&h=168&f=png&s=29601)

直接回车（默认同意）

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8fb691ed1778?w=1431&h=339&f=png&s=86519)

一路回车然后选择package.json 看下我们选择了啥ts 然后sass 语法检查esl

然后再回车就进行最后的cli项目的下载了。耐心等待

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8fe177785078?w=1373&h=289&f=png&s=45006)

![](https://user-gold-cdn.xitu.io/2018/10/31/166c90baf66f61ba?w=713&h=320&f=png&s=38890)

我们下载好了   

```
# 输入
vue ui
```

![](https://user-gold-cdn.xitu.io/2018/10/31/166c90dc2827bec2?w=1444&h=729&f=png&s=83644)

欢迎来到vuecli3.0 图形话界面，现别着急现看我们的项目文件结构

## 2.vue config文件配置
---

##### 下面是我们的文件的结构

![](https://user-gold-cdn.xitu.io/2018/10/31/166c91281335b519?w=497&h=482&f=png&s=42090)
```
  ##  文件介绍
 
 1.   node_modules //当前node模块存放处
 2.   public //index页面所在镜头文件也可以放这个里面
 3.   src //当前项目存放
        assets //静态文件存放
        components //组件存放
        views //项目存放
        app.vue //这个我们文件的主要路由输入地方
        main //总的js文件
        router //路由文件
        shims-tsx.d //兼容jsx
        shims-vue.d //兼容vue
        store //vuex总文件
 4.   pakeage.js //文件（我们安装的依赖都再里面可以看到，也可以根据这个去下载node_modules）
 5.   我们还少一个vue.config.js 和 pakeage.js 同级
```
##### 为我等伸手党送上一份福利
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

![](https://user-gold-cdn.xitu.io/2018/10/31/166c9323eecd5c7d?w=1452&h=823&f=png&s=103201)

![](https://user-gold-cdn.xitu.io/2018/10/31/166c933146f55643?w=1253&h=811&f=png&s=160014)

![](https://user-gold-cdn.xitu.io/2018/10/31/166c932bc6db2c7f?w=1441&h=860&f=png&s=106960)

vue+ts基本的项目搭建就完成了
## 3.项目搭建
先看一波完成后的项目介绍（`webstorm`里面`ts`不支持引入`vue`所有爆红色，强迫症患者可以用`vscode`支持会更好）
![](https://user-gold-cdn.xitu.io/2018/10/31/166c97cb6827c1ef?w=405&h=727&f=png&s=39636)
```
  public //当前文件
    static //可以放静态资源不会被打包（我放的是富文本编译器的文件后期会太慢可以换成cdn直接引入到index.html）
  src //当前项目文件
    assets //静态资源存放需要被打包
    components //组件存放处
        beforeUpload //单个图片上传组件 （基于element）
        pagination //分页插件 （基于element）
        reset //重置按钮组件
        tinyMceEditor //富文本编译器（这个是重点ts支持的vue插件当前对于我们伸手党来说比较少）
        uploadListImg //批量图片上传（基于element）
        verification //表单验证
    utils //当前项目公用方法
    views //当前项目存放地址
        aixo //当前项目ajax封装
        content //当前项目业务逻辑
        filters //当前项目过滤器
        haveNot //404页面
        layout //项目结构布局
        login //当前项目登陆页面
        method //当前项目的静态遍历存放
        store //当前项目vuex存放（不要为了用vuex而用，其实很多项目都不需要用到vuex的）
        system //权限管理相关
        typings //ts定义使用
        utils //存放其他文件（我这边存了cookie的文件）
    app.vue //全局路由页面
    main.ts //启始的js
    permission.ts //路由中转页面
    route //路由页面
    shims-tsx.d //支持jsx
    shims-vue.d //支持vue
    vue-config //vue配置
    vue-shim.d.ts //声明全局方法（ts会自动抓取.d.ts文件部分全局方法需要定义才可以使用）
```

组件组件后面会一个一个讲解，公共方法也会讲，先要下载当前需要的`ts`的插件
```
##   最主要到是这3个
1.   aixo
2.   element
3.   js-cookie
```
看下package.js 可以看到我们当前到依赖
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca0f579843c00?w=1257&h=653&f=png&s=178351)

然后我们去下载当前到依赖

---
### 福利篇
教你如何看插件是否可以使用当前到`vue` + `ts`项目（当前`ts`+`vue`还是比较少）
[`TypeSearch`](https://microsoft.github.io/TypeSearch/)   
如果和下面的图一样能搜索出来的基本可以判断支持ts
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca18c9bd65f38?w=1094&h=525&f=png&s=27425)

---
### 下载当前项目依赖
我们打开当前图形管理工具
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca1b4bbe6653d?w=1871&h=778&f=png&s=134579)
选择然后下载（还要下载当前`ts`的）
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca1e344c32ac5?w=1221&h=768&f=png&s=190835)
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca1cd1eeed073?w=1203&h=839&f=png&s=168400)
这样才算把整个`aixo`下载好（其他插件都一样都需要下载2个）   
第二个主要是在`node_modules`里面的`@types`里面定义一遍才可以使用
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca2124e4cefd4?w=1528&h=530&f=png&s=122681)
路由页面和`vue`的页面差别不是很大
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca26df1f4629d?w=1677&h=613&f=png&s=180837)
`main.js`差别也不大
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca27f545a5c2a?w=1254&h=607&f=png&s=153549)

## `app.vue`文件

![](https://user-gold-cdn.xitu.io/2018/10/31/166ca29f4d4c3662?w=1325&h=568&f=png&s=139770)
讲一下这个把 `vue-property-decorator`不然小伙伴们对这个会很不懂的
```
### vue-property-decorator
@Prop  父子组件之间传值
   ## 使用方式
   @Prop({
        type: String,
        default: 'Default Value'
    }) msg: string;
    
@Model  数据双向绑定
    @Model('change') checked: boolean
    
@Watch  监听数据变化    
    //监听路由变化
    @Watch('$route')
    onRouteChanged(route: any, oldRoute: any) :void {
        this.$forceUpdate() ## 刷新当前的数据
    }
    
@Provide  提供  /  @Inject  注入   
    ## 父
     @Provide('users')
      users = [
        {
          name: 'test',
          id: 0
        }
      ]
    ## 子  
    @Inject('users') users;  

修饰器
    const Log = (msg) => {
      return createDecorator((component, key) => {
        console.log("#Component", component);
        console.log("#Key", key); //log
        console.log("#Msg", msg); //App
      })
    }
    @Log('fullMessage get called')
    get fullMessage() {
      return `${this.message} from Typescript`
    }

```
可能您还是不懂建议看下官方文档[`vue-property-decorator`](https://github.com/kaorun343/vue-property-decorator)这里就不详细赘述了，由于本人比较愚钝（伸手党一枚）

![](https://user-gold-cdn.xitu.io/2018/10/31/166ca25f7845f8dc?w=1489&h=652&f=png&s=193789)
我们的项目总的是在`layout`文件夹里面的先看下这个文件


![](https://user-gold-cdn.xitu.io/2018/11/8/166f16d399ab64a7?w=1578&h=771&f=png&s=208224)
```
    layout
        content
            AppMain.vue //当前文件为我们的主要路由
            index.ts //作为我们的总的转接的文件
            navbar.vue //当前项目的左侧导航
            newtab.vue //定义的组件
            prompt,vue //最左侧的结构（先预留起来）
        layout.vue //总项目的文件 
        style.scss //当前项目的css
```
看我们引入的是一个文件夹，会自动获取到`index.ts`然后`index.ts`里面`es6`的写法

![index.ts](https://user-gold-cdn.xitu.io/2018/11/8/166f16e4168a4cdf)

```
## 新写法ES6 （有时间的老爷可以看下es6）有不懂的可以加群里面直接询问项目结构大概就是这样各位老爷可以github一下即可查看当前代码
    components: {
        Navbar,
        AppMain,
        Prompt
    }
## 老写法   
    components: {
        Navbar: Navbar,
        AppMain: AppMain,
        Prompt: Prompt
    }
```
 ##  2.`element`的引入 
#### 1.先安装依赖
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2b260ee528b0?w=1401&h=890&f=png&s=165426)
#### 2.引入css
```
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
```
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2b19eff7841b?w=1740&h=607&f=png&s=188008)
#### 3.main.ts 引入全局
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2b3de0fdaaee?w=1534&h=781&f=png&s=159444)
#### 4.可以使用了
复制粘贴一下`element`的代码
```
http://element.eleme.io/#/zh-CN/component/time-picker
```
我们这边使用一定要`public`共有变量， 别使用这个`private`私有变量(上面的html里面会找不到下面的变量虽然不会报错)
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2bc00dcc60fb?w=1303&h=869&f=png&s=235347)
##### 5.效果图
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2bee187c6b0c?w=1088&h=921&f=png&s=92934)

#### 3.`aixo`的使用（`ajax`）
图形化界面去下载两个一个是用来兼容 `ts`的
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2c0a2b804c1d?w=855&h=439&f=png&s=83763)
附上封装好的`ajax`代码
```
import Axios from 'axios';
import { Message } from 'element-ui';
import { getToken } from '@/views/utils/auth'; // token 不需要可以不要

const httpServer = (opts: any) => {
        const httpDefaultOpts = { // http默认配置
            method: opts.method,
            baseURL: 'https://xxxx.com',  // 测试
            url: opts.url,
            timeout: 100000,
            params: opts.params,
            data: opts.params,
            headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
            'systoken': '',
            } : {
            'Content-Type': 'application/json;charset=UTF-8' ,
            'systoken': '',
            },
    };
        if (getToken()) {
        const token: any = getToken();
        httpDefaultOpts.headers.systoken = token;
    }
        if (opts.method == 'get') {
        delete httpDefaultOpts.data;
    } else {
        delete httpDefaultOpts.params;
    }
        const promise = new Promise(function(resolve, reject) {
        Axios(httpDefaultOpts).then(
        (res) => {
            if (res.data.code == -3) {
                resolve(res.data);
            } else {
                resolve(res.data);
            }
        },
        ).catch(
        (response) => {
            reject(response);
        },
        );
    });
        return promise;
};

export default httpServer;

```
```
import Http from '@/views/aixo/http';

/**
 * 总系统角色菜单 | 根据用户ID获取所属角色的菜单
 * @param userId 用户id
 */
export const managxxxMenuUserId = (userId: any) => {
    return Http({
        url: `/xxx/${userId}`,
        method: 'post',
    });
};

```
使用方式
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2c42bfa3ce91?w=1250&h=587&f=png&s=160806)
## 1.vueX的使用（划重点
首先我们先在图形话界面去下载当前需要到依赖（版本号以及axios都需要一致不知道可以去我们都[第一章](https://juejin.im/post/5bd942bce51d4568682517ef)看看
![](https://user-gold-cdn.xitu.io/2018/11/9/166f7d989ea89b7e?w=755&h=445&f=png&s=84222)
先建4个文件，我一个文件一个文件讲，观众老爷耐心听
![](https://user-gold-cdn.xitu.io/2018/11/9/166f7697b7223ed0?w=1175&h=613&f=png&s=134918)

#### 1.`state`文件（不了解的可以先去看下`vuex`[官网](https://vuex.vuejs.org/zh/guide/state.html)）
这里我们把全局的变量放里面（说一下不是为了用vuex才用vuex的，有些项目完全可以不用当然可以不用）
```
import { getToken, setToken, removeToken } from '@/views/utils/auth'
const state: any = {
    token: getToken(),
    imgUrl: 'https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1/upload'
}
export default state
```

#### 2.`mutations`文件
这个文件就是提交改变当前的`state`里面的值的不懂`interface`的可以看下[慕课网](https://www.imooc.com/video/13538)
```
export default mutations{
    ## 老方法
    SET_TOKEN(state: any, data: any) {
         state.token = data
    },
 }
 
import { MutationTree } from 'vuex'
    ## 新方法 MutationTree<any> 相信应该有些人不理就是一个接口
const mutations: MutationTree<any> = {
    'SET_TOKEN'(
        state: any,
        data: any
    ): void {
        state.token = data
    }
}
```
vuex 里面的源码可以看一下
![](https://user-gold-cdn.xitu.io/2018/11/9/166f7757a0f38246?w=798&h=695&f=png&s=111993)

#### 3.`actions`文件
这个文件可以执行`mutations`文件里面的方法公共的方法都可以放到这个里面`async`定义一个一步函数总是实际返回值总是一个 Promise 对象
```
import { sysUserLogin } from '@/views/interface/login';
import { getToken, setToken, removeToken } from '@/views/utils/auth';
import { ActionTree } from 'vuex';
import { Message } from 'element-ui';

const actions: ActionTree<any, any> = {
    /**
     * 登陆
     * @param param0
     * @param userInfo 登陆信息
     */
    async Login({state, commit} , userInfo: any) {
        return new Promise((resolve, reject) => {
            sysUserLogin(userInfo).then((response: any) => {
              setToken(response.data.systoken);
              console.log(response.data.systoken);
              commit('SET_TOKEN', response.data.systoken); ## 这边调用了上面的方法
              resolve(response);
            }).catch((error) => {
              reject(error);
            });
          });
      },
    /**
     * 深拷贝
     * @param param0
     * @param params
     */
    async deep({state, commit} , params: any) {
      let obj = {};
      obj = JSON.parse(JSON.stringify(params));
      return obj;
    },

};

export default actions;
```

#### 4.`getters`文件
`getters` 可以定义是 `store` 的计算属性可以将 `state` 进行过滤然后`return`出来

```
## 老方法
export default {
    token: (state:any) => state.token,
}

## 新方法
import {GetterTree} from 'vuex'
const mutations: GetterTree<any,any> = {
    'token'(
        state: any,
    ): any {
        return state.token
    }
}
export default mutations
```

### `vuex`使用方式`vuex-class`

![](https://user-gold-cdn.xitu.io/2018/11/9/166f79acaec0b702?w=1411&h=387&f=png&s=103624)
```
## 获取state的值 （先要定义一遍才可以使用）
@State imgUrl
@Action('Login') Login;
@Getter('Login') getterFoo;
@Mutation('Login') mutationFoo;
// 简写方式
@State foo
@Getter bar
@Action baz
@Mutation qux
 //最先开始执行 
created() {
    ## 后面的是原来的使用方式
    console.log(this.imgUrl); // ->  this.store.state.imgUrl
    console.log(this.getterFoo(2)) // -> this.store.getters.Login
    this.Login({ value: true }).then() // -> this.store.dispatch('Login', { value: true })
    this.mutationFoo({ value: true }) // -> this.store.commit('Login', { value: true })
}
```
## 2.图片上传（以及批量的图片上传

这里我们用的是element的图片上传 如有不懂的可以看下`element`的组件
#### 单张图片上传
我们想要更佳简便的使用方式
```
// 单张图片上传（组件）
<template>
    <div>
        <el-upload
                class="avatar-uploader"
                :action="$store.state.imgUrl" ## 我们图片上传的地址
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
            <img v-if="BeforeUploadImg" :src="BeforeUploadImg" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>

<script lang="ts">

    import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator';

    @Component
    export default class BeforeUpload extends Vue {

        ## 初始值
        @Prop(String)BeforeUploadImg:string;

        ## 生命周期最先开始执行 void 表示没有返回值
        created():void {
        }

        public handleAvatarSuccess(res:any, file:any) {
            ## 本地图片预览; update: 这样配合父组件可以实现父子组件的双向绑定
            this.$emit('update:BeforeUploadImg',res.data[0].newFileName);
        }
        
        public beforeAvatarUpload(file:any) {
            // const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isJPG) {
            //     this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            // return isJPG && isLt2M;
            return isLt2M;
        }
    }
</script>

    # 使用方式
    # html .sync 配合update可以实现双向绑定
    <BeforeUpload :BeforeUploadImg.sync="BeforeUploadImg"></BeforeUpload>
    
    # script
    import BeforeUpload from '@/components/beforeUpload/beforeUpload.vue';
    import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator';
    @Component({
        components: {
            BeforeUpload,
        }
    })
    export default class Content extends Vue {
        ## 默认图片
        public BeforeUploadImg: string = '';
    }

```
#### 批量图片上传
我们想要更佳简便的使用方式
```
// 批量图片上传（组件）
<template>
    <div>
        <el-upload
                class="upload-demo"
                :action="$store.state.imgUrl"
                :on-preview="handlePreview"
                :on-success="handleOnSuccess"
                :on-remove="handleRemove"
                :file-list="UploadListsImg"
                list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1024kb</div>
        </el-upload>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator';

    @Component
    export default class UploadListImg extends Vue {
        // 初始值
        @Prop(null)UploadListsImg:object[];
        //最先开始执行
        created():void {
            // tinyMce.init({})
        }
        /**
         * 删除图片
         * @param file 删除的图片
         * @param fileList 剩下的图片
         */
        public handleRemove(file:any, fileList:any) {
            console.log(file, fileList);
            this.$emit('update:UploadListsImg',fileList)
            this.$emit('removeListImg',file)
        }
        public handlePreview(file:any) {
            console.log(file);
        }

        /**
         * 添加图片
         * @param response 成功的返回值
         * @param file 当前的这个图片
         * @param fileList 当前所有的图片
         */
        public handleOnSuccess(response:any, file:any, fileList:any){
            file.url = response.data[0].newFileName;
            file.name = response.data[0].originalFilename;
            this.$emit('update:UploadListsImg',fileList)
        }

    }
</script>
    ## html UploadListsImg为当前剩下的图片的list    removeListImg为删除掉的list 使用方式
    <UploadListImg :UploadListsImg.sync="UploadListsImg"  @removeListImg="removeListImg" style="width: 400px"></UploadListImg>
    ## script
    import UploadListImg from '@/components/uploadListImg/uploadListImg.vue';
    import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator';
    @Component({
        components: {
            UploadListImg,
        }
    })
    export default class Content extends Vue {
        public UploadListsImg: object[] = [
            {
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            },
            {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }
        ];
        public removeListImg: object[] = []
    }
```

## 3.分页的使用
分页我们想要更加简便的使用方式
```
// 分页组件
<style scoped lang="scss">
    .t-pagination{
        width: 100%;
        overflow: hidden;
    }
    .t-pagination-content{
        float: right;
        margin: 20px;
    }
</style>
<template>
    <div class="t-pagination">
        <div class="t-pagination-content">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="Paginationtotal">
            </el-pagination>
        </div>
    </div>
    
</template>

<script lang="ts">
import Utils from '@/utils/utils'
import { Component, Vue, Model, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Reset extends Vue {
    // props声明
    @Prop() private Paginationtotal!: number;
    private pageSize:number = 20;
    private currentPage4:number = 1;
    //最先开始执行
    created():void {
        if (this.$route.query.pageNum) {
            this.currentPage4 = Number(Utils.deep(this.$route.query.pageNum));
            this.pageSize = Number(Utils.deep(this.$route.query.pageSize));
        }else {
            this.currentPage4 = 1;
            this.pageSize = 20;
        }
    }
    //监听路由变化
    @Watch('$route')
    onRouteChanged(route: any, oldRoute: any) :void {
        if (route.query.pageNum) {
            this.currentPage4 = Number(Utils.deep(route.query.pageNum))
            this.pageSize = Number(Utils.deep(route.query.pageSize));
        }else {
            this.currentPage4 = 1;
            this.pageSize = 20;
        }
        this.$forceUpdate()//强刷当前
    }
    private handleSizeChange(val:any) {
        let data:any = Utils.deep(this.$route.query);
        [data.pageNum,data.pageSize] = [1,val]
        this.start(data)
        console.log(`每页 ${val} re条`);
    }
    private handleCurrentChange(val:any) {
        let data:any = Utils.deep(this.$route.query);
        data.pageNum = val
        data.pageSize = this.pageSize
        this.start(data)
        console.log(`当前页: ${val}re`);
    }
    private start(ret:any) {
        this.$store.dispatch('paramsUrl',ret).then((res:any) => {
            this.$router.push(`${this.$route.path}${res}`)
        })
    }
}
</script>
# html 使用方式
<Pagination :Paginationtotal="Paginationtotal"></Pagination>
# script
import Pagination from '@/components/pagination/pagination.vue';
import { Component, Vue, Model, Watch, Provide } from 'vue-property-decorator';
@Component({
    components: {
        Pagination
    }
})
export default class Content extends Vue {
    Paginationtotal:number = 0;
}
```

## 4.重制按钮的分装

我们重置只需要把当前的分页重置成第一页 20跳数据即可
```
// 重置按钮
<template>
    <el-button size="mini" @click="reset(searchReserved)">重置</el-button>
</template>

<script lang="ts">
    import { Component, Vue, Model, Prop } from 'vue-property-decorator';

    @Component({
    })
    export default class Reset extends Vue {
        // props声明 paramsUrl 为定义的当前的vuex里面的方法
        @Prop() private searchReserved!:object
        public reset(search:any) {
            [search.pageNum,search.pageSize] = [1,20]
            this.$store.dispatch('paramsUrl',search).then((res:any) => {
                this.$router.push(`${this.$route.path}${res}`)
            })
        }
    }
</script>

## html 使用方式
<Reset :searchReserved="searchReserved"></Reset>
## script
import Reset from '@/components/reset/reset.vue';
@Component({
    components: {
        Reset
    }
})
export default class Content extends Vue {
    searchReserved = {}
}
```

##  5.富文本编译器
关于富文本编译器，我想大家应该不陌生了，我推荐一筐`tinyMce`来使用到我们当前到项目里面来富文本编译器`ts`都支持还不是多，我找来很多来尝试，最后决定用`tinyMce`下载一下这两个，中间踩了很多坑，给我们伸手党线上开箱即食的代码把
![](https://user-gold-cdn.xitu.io/2018/11/9/166f7deb1161c7ff?w=554&h=359&f=png&s=69964)
把cdn放上速度更快
![](https://user-gold-cdn.xitu.io/2018/11/9/166f7e1689c9f91c?w=1663&h=495&f=png&s=174174)
### 重要的说一下我们的静态的这个文件放public 下面这个一定要放这，下面的这个一定要放进去不然页面食用不了[文件链接](https://github.com/2384830985/-vue-ts-vuecli3.0-elementUi/tree/master/public/static)
![](https://user-gold-cdn.xitu.io/2018/11/9/166f7e646f9d5dea?w=1020&h=482&f=png&s=139167)
```
 ## 富文本编译器 ## EditorContent 默认值 onChangeHandler 改变的事件 editorInit 初始配置 
 ## 基本上图片上传都需要form表单方式上传  FormData
<template>
    <div>
        <Editor :initial-value="EditorContent" @onChange="onChangeHandler" id="tinyMce" :init="editorInit"></Editor>
    </div>
</template>

<script lang="ts">
    import 'tinymce/themes/modern/theme';
    import Editor from '@tinymce/tinymce-vue';
    import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator';

    @Component({
        components: {
            Editor
        }
    })
    export default class Content extends Vue {
        // 父组件传进来的html
        @Prop(String) EditorContent: any;
        // 初始值
        public initialVal:any = '';
        public editorInit:any = {
            language_url: './static/zh_CN.js',
            language: 'zh_CN',
            selector: 'textarea',
            skin_url: './static/skins/lightgray',
            height: 300,
            // width:600,
            images_upload_url: 'https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1/upload',
            plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
            toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
            images_upload_handler: function (blobInfo:any, success:any, failure:any) {
                let xhr:any, formData:any;
                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', this.$store.state.imgUrl);
                xhr.onload = function() {
                    if(xhr.status<200||xhr.status>=300){
                        failure(xhr.status);
                        return;
                    }
                    let json = JSON.parse(xhr.responseText);
                    if(json.code==0){
                        success(json.data[0].newFileName);
                    } else {
                        failure('HTTP Error: ' + json.msg);
                    }
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            // images_upload_url: 'https://api.iyuedian.com/iyd-imall-manage/imall/v1/upload'
        }
        //最先开始执行
        created():void {
            // tinyMce.init({})
        }
        //监听路由变化
        @Watch('$route')
        onRouteChanged(route: any, oldRoute: any) :void {
            this.$forceUpdate()
        }
        /**
         * 富文本内容变化时事件
         */
        public onChangeHandler(res:any,index:any,tag:any){
            //width height小程序不支持这个把这个替换了
            let html = res.level.content.replace("width","xxx")
            html = html.replace("height","yyy")
            // console.log(html)
            this.$emit('update:EditorContent',html)
        }
    }
</script>
## html 使用方式
<Editor :EditorContent.sync="EditorContent"></Editor>
## script
import Editor from '@/components/tinyMceEditor/tinyMceEditor.vue';
 @Component({
        components: {
            Editor
        }
    })
export default class Content extends Vue {
    // 默认图文详情
    public EditorContent: string = '';
}

```

##  1.
使用方式
![](https://user-gold-cdn.xitu.io/2018/11/8/166f2c42bfa3ce91?w=1250&h=587&f=png&s=160806)

 ## 小结
 基本的插件都讲了一下有问题可以添加上面的qq群
 
