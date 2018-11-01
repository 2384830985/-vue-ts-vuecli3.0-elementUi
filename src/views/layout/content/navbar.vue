<style scoped lang="scss">
    .t-container-navbar{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .t-container-one{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            width: 90px;
            background: #444;
            overflow: hidden;
            overflow-y: auto;
            display: inline-block
        }
        .t-container-one::-webkit-scrollbar {/*隐藏滚轮*/
            display: none;
        }
        .t-container-tow{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 90px;
            width: 110px;
            overflow: auto;
            background: #fff;
            .t-container-header{
                padding-left: 20px;
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                border-bottom: 1px solid #f2f2f2;
                box-sizing: border-box;
            }
            .t-container-content{
                padding: 13px 10px;
                width: 110px;
                ui{
                    list-style: none;
                }
            }
        }
    }
    .t-container-list{
        color: #666;
        display: block;
        padding: 0 10px;
        font-size: 14px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 14px;
        overflow: hidden;
        cursor: pointer;
        list-style-type:none;
        border-radius: 2px;
    }
    .t-container-list:hover{
        color: #38f
    }
    .t-container-list:active{
        background: #f8f8f8;
        color: #444
    }
    .router-link-active{
        display: block;
        padding: 0 10px;
        font-size: 14px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 14px;
        overflow: hidden;
        cursor: pointer;
        list-style-type:none;
        border-radius: 2px;
        background: #f8f8f8;
        color: #444
    }
    .t-container-logo{
        display: block;
        width: 90px;
        height: 63px;
        overflow: hidden;
    }
    .t-user-info{
        font-size: 14px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 14px;
        cursor: pointer;
        
    }
    .t-user-test{
        color: #cacaca;
        display: block;
        padding-left: 18px;
    }
    .t-user-test:hover{
        color: white;
        background: #666
    }
    .t-user-info-active{
        color: black;
        display: block;
        padding-left: 18px;
        background: #f8f8f8
    }
</style>

<template>
    <div class="t-container-navbar">
        <!-- 第一级导航 -->
        <div class="t-container-one">
            <div class="t-container-logo"></div>
            <!--<div v-for="item in content" :key="item.id" v-if="item.children[0]" class="t-user-info">-->
                <!--<a tag="div" :href="'/#'+item.url">-->
                    <!--<div :class="item.url===matchedChang?'t-user-info-active':'t-user-test'">-->
                        <!--<i :class="item.icon"></i>-->
                        <!--<span>&nbsp;{{item.oldname}}</span>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</div>-->
            <div class="t-user-info">
                <a tag="div" :href="'/#/system'">
                    <div class="t-user-info-active">
                        <i class="el-icon-printer"></i>
                        <span>&nbsp;系统</span>
                    </div>
                </a>
            </div>
        </div>
        <!-- 第二级导航 -->
        <!--<div class="t-container-tow" v-for="item in content" :key="item.id" v-if="item.url===matchedChang">-->
            <!--<div class="t-container-header">{{item.name}}</div>-->
            <!--<nav class="t-container-content" >-->
                <!--<router-link tag="div" class="t-container-list" v-for="items in item.children" :key="items.id" :to="items.url">{{items.name}}</router-link>-->
                <!--&lt;!&ndash; <div class="t-container-list">商品导入</div> &ndash;&gt;-->
            <!--</nav>-->
        <!--</div>-->
        <div class="t-container-tow">
            <div class="t-container-header">系统</div>
            <nav class="t-container-content" >
                <router-link tag="div" class="t-container-list" to="/system/permission">权限列表</router-link>
                <router-link tag="div" class="t-container-list" to="/system/permissionAdd">新增列表</router-link>
                <router-link tag="div" class="t-container-list" to="/system/user">用户列表</router-link>
                <!-- <div class="t-container-list">商品导入</div> -->
            </nav>
        </div>
    </div>  
</template>

<script lang="ts">
import { manageSysRoleMenuUserId } from "@/views/interface/nabarInteface";
import Verification from '@/components/verification/verification.ts';
import { Component, Vue, Model, Watch } from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {
    public content:any = [];//当前的数组
    public matchedChang: string = '';//当前选中的一级
    created():void {
        let user:any = {}
        if(localStorage.getItem('userList')){
            user = localStorage.getItem('userList');
            user = JSON.parse(user);
            this.manageSysRoleMenuUser(user.id)
        }
    }
    private manageSysRoleMenuUser(id:string) {
        manageSysRoleMenuUserId(id)
            .then((res:any) => {
                if (res.code==0) {
                    //装载所有导航
                    let att:any = [];
                    for (let item of res.data) {
                        att.push(item.sysMenu)
                    }
                    //判断是否是使用权限
                    if (att==null){
                        this.$message('暂无使用权限');
                        this.$router.push({
                            path: '/login', // 退出登录
                        })
                    }
                    //父级菜单
                    let arr: any[] = [];
                    //子级菜单
                    let tow: any[] = [];
                    //循环出需要的数
                    for(let item of att) {
                        //默认是不选
                        if (item.type==1) {
                            item.children = []
                            arr.push(item)
                        }else {
                            tow.push(item)
                        }
                    }
                    for (let i=0;i<arr.length;i++){
                        // 循环出当前第一级导航的名称
                        arr[i].oldname = arr[i].name.substring(0,2);
                        let index = 1;// 找出当前的选中的这个
                        for (let item of tow){
                            if (item.parentId==arr[i].id){
                                if(index===1){
                                    this.matchedChang = arr[i].url
                                }
                                index++;
                                arr[i].children.push(item)
                            }
                        }
                        // if (index==1){ // 如果当前没有选中
                        //     if (1){
                        //
                        //     }
                        // }
                    }
                    //复制给tree需要的值
                    this.content = arr;
                }
            })
    }
   // watch
    @Watch('$route')
    onRouteChanged(route: any, oldRoute: any) :void {
        this.matchedChang = route.matched[0].path;
        console.log(route.matched[0])
        console.log(this.matchedChang)
        this.$forceUpdate()
    }
    private activated() {
        // console.log(2);
    }
    private deactivated() {
        // console.log(4);
    }
}
</script>


