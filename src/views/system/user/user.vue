<template>
    <div>
        <newTab></newTab>
        <div class="t-p-content-10">
            <div class="t-container">
                <!-- 发布按钮 -->
                <div class="t-mini-buttom">
                    <el-button size="mini" type="primary" @click="addUser">添加用户</el-button>
                </div>
                <!-- 搜索条件 -->
                <div class="t-search-content">
                    <el-form :model="formInline" label-position="right" class="demo-form-inline" size="mini" label-width="140px">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="用户名:">
                                    <el-input v-model="formInline.name" class="w-80"  placeholder="用户名"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="角色名称:">
                                    <el-select v-model="formInline.roleId" class="w-80" placeholder="角色名称">
                                        <el-option value="" label="全部">全部</el-option>
                                        <el-option v-for="item in sysRolePageList" :value="item.id+''" :label="item.name" :key="item.id"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="状态:">
                                    <el-select v-model="formInline.isDel" class="w-80" placeholder="状态">
                                        <el-option value="" label="全部">全部</el-option>
                                        <el-option value="1" label="封停"></el-option>
                                        <el-option value="0" label="正常"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="">
                                    <el-button type="primary" @click="search">筛选</el-button>
                                    <Reset :searchReserved="searchReserved"></Reset>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <!-- 表格 -->
                <el-table
                        :data="tableData"
                        border
                        v-loading="loading"
                        max-height="700"
                        style="width: 100%; margin-top: 20px">
                    <el-table-column
                            prop="name"
                            align="center"
                            label="用户昵称">
                        <template slot-scope="scope">
                            {{scope.row.name}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            align="center"
                            label="角色名称">
                        <template slot-scope="scope">
                            <div v-if="scope.row.userRoleList[0]">
                                {{scope.row.userRoleList[0].roleName}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            align="center"
                            label="创建时间">
                        <template slot-scope="scope">
                            {{scope.row.createDate|formatDate}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            align="center"
                            label="状态">
                        <template slot-scope="scope">
                            {{scope.row.isDel|userIsSeal}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="状态"
                    >
                        <template slot-scope="scope">
                            <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" v-if="scope.row.isDel==0" @click="onTheShelf(scope.row,1)">封停</el-button>
                            <el-button type="text" size="small" v-if="scope.row.isDel==1" @click="onTheShelf(scope.row,0)">回归</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <Pagination :Paginationtotal="Paginationtotal"></Pagination>
                <el-dialog
                        title="用户操作"
                        :visible.sync="centerDialogVisible"
                        width="30%"
                        center>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="登录名">
                            <el-input v-model="form.loginAccount" placeholder="登录名"></el-input>
                        </el-form-item>
                        <el-form-item label="用户角色">
                            <el-select v-model="form.roleId" style="width: 100%" placeholder="用户角色">
                                <el-option v-for="item in sysRolePageList" :value="item.id+''" :label="item.name"  :key="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="form.name" placeholder="姓名"></el-input>
                        </el-form-item>
                        <!--<el-form-item label="密码">-->
                        <!--<el-input type="password" v-model="form.password" placeholder="密码"></el-input>-->
                        <!--</el-form-item>-->
                        <el-form-item label="状态">
                            <el-radio-group v-model="form.isDel" placeholder="状态" class="m-b-8">
                                <el-radio :label="'0'">可用</el-radio>
                                <el-radio :label="'1'">封停</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="addUserList">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import newTab from '@/views/layout/content/newtab.vue';
    import method from '@/views/method/method';
    import Reset from '@/components/reset/reset.vue';
    import Pagination from '@/components/pagination/pagination.vue';
    import { sysUserPage,sysRolePage,sysUserAdd,sysUserUpdate,sysUserEdit} from '@/views/interface/system'
    import Utils from '@/utils/utils';
    import { Component, Vue, Model, Watch } from 'vue-property-decorator';

    @Component({
        components: {
            newTab,
            Reset,
            Pagination
        }
    })
    export default class Content extends Vue {
        public userIsDel:object[] = method.userIsDel;
        public userIsSeal:object[] = method.userIsSeal;
        private sysRolePageList:any = {};
        private loading: any = false;
        public tableData:any = [];
        public searchReserved = {};
        private centerDialogVisible:boolean = false;
        private Paginationtotal:number = 0;
        //定义当前的搜索标格
        private formInline:any = {};
        //定义搜索框内表格
        public form:any = {};
        //最先开始执行
        created():void {
            this.start(this.$route.query)
            //请求系统角色
            sysRolePage({})
                .then((res:any) => {
                    console.log(res)
                    if(res.code==0){
                        this.sysRolePageList = res.data.list;
                    }else{
                        this.$message(res.msg)
                    }
                })
        }

        //监听路由变化
        @Watch('$route')
        onRouteChanged(route: any, oldRoute: any) :void {
            this.start(route.query);
            this.$forceUpdate()
        }
        /**
         * 搜索
         */
        private search():void {
            let _this = this;
            let data = Utils.deep(this.formInline);
            this.$store.dispatch('paramsUrl',data).then((res:any) => {
                this.$router.push(`${this.$route.path}${res}`)
            })
        }
        /**
         * 开始执行
         * query 当前url上的搜索参数
         */
        private start (query:any){
            // 深拷贝
            this.formInline = Utils.deep(query);
            if(!this.formInline.pageNum){
                this.formInline.pageNum = 1;
                this.formInline.pageSize = 20;
            }
            this.loading = true;
            //请求用户管理列表
            sysUserPage(this.formInline)
                .then((res:any) => {
                    console.log(res)
                    this.loading = false;
                    if(res.code==0){
                        this.tableData = res.data.list;
                        this.Paginationtotal = res.data.total;
                        console.log(res.data.total)
                    }else{
                        this.loading = false;
                        this.$message(res.data)
                    }
                    console.log(res)
                })
                .catch(() => {
                    this.loading = false;
                });
        }
        //添加编辑新用户界面打开
        private addUser(){
            this.form = {}
            this.centerDialogVisible = true
        }
        //编辑用户
        private handleClick(res:any){ // 去编辑
            sysUserEdit(res.id)
                .then((res:any)=>{
                    console.log(res)
                    if (res.code==0){
                        this.form = res.data
                        if (this.form.userRoleList[0]){
                            this.form.roleId = this.form.userRoleList[0].id
                        }
                        // this.form.roleId = Number(this.form.roleId)
                        this.centerDialogVisible = true
                        console.log(res.data)
                    } else {
                        this.$message(res.msg);
                    }
                },(error:any)=>{
                    console.log(error)
                })
        }
        //添加新用户
        private addUserList(){
            let that = this;
            if (this.form.id){
                sysUserUpdate(this.form)
                    .then((res:any)=>{
                        if (res.code==0){
                            this.$message({
                                type: 'success',
                                message: '修改成功!'
                            });
                            that.start(this.$route.query)
                            that.centerDialogVisible = false
                        } else {
                            this.$message(res.msg);
                        }
                    },(error:any)=>{
                        this.$message(error.msg);
                    })
            } else {
                this.$confirm('确定新增用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.form.password = 123456;
                    sysUserAdd(this.form)
                        .then((res:any)=>{
                            console.log(res)
                            // that.addUserDisabled = false
                            if (res.code==0){
                                this.$message({
                                    type: 'success',
                                    message: '创建成功!'
                                });
                                that.start(this.$route.query)
                                that.centerDialogVisible = false
                            } else {
                                this.$message(res.msg);
                            }
                        },(error:any)=>{
                            this.$message(error.msg);
                        })
                }).catch(() => {

                });
            }

        }
        //上下架
        private onTheShelf(res:any,index:any) {//上下架 index==1上架 index==2下架
            let that = this;
            let msg = '';
            if (index==1){
                msg = '封停'
            } else {
                msg = '回归'
            }
            let arr = {
                id: res.id,
                isDel: index
            }
            this.$confirm('请确定是否要'+msg+'该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                sysUserUpdate(arr)
                    .then((res:any)=>{
                        if (res.code==0){
                            this.$message(msg+'成功!');
                            that.start(this.$route.query)
                        } else {
                            this.$message(res.msg);
                        }

                    },(error:any)=>{
                        console.log(error)
                    })

            })
        }
        private activated() {
            console.log(2);
        }
        private deactivated() {
            console.log(4);
        }
    }
</script>


<style scoped lang="scss">

</style>