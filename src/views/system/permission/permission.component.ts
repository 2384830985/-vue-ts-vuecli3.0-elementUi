import newTab from '@/views/layout/content/newtab.vue';
import Reset from '@/components/reset/reset.vue';
import Pagination from '@/components/pagination/pagination.vue';
import { sysMenuPage, sysMenuEdit, sysMenuUpdate, sysMenuAdd } from '@/views/interface/system';
import Utils from '@/utils/utils';
import method from '@/views/method/method';
import { Component, Vue, Model, Watch, Provide } from 'vue-property-decorator';
@Component({
    components: {
        newTab,
        Reset,
        Pagination
    }
})
export default class Content extends Vue {
    @Provide()
    centerDialogVisible: boolean = false;
    form: any = {}
    userIsDel:object[] = method.userIsDel;
    loading: boolean = false;
    tableData:any = [];
    oneList:any = [];
    searchReserved = {}
    Paginationtotal:number = 0;
    //定义当前的搜索标格
    formInline:any = {};
    //最先开始执行
    created():void {
        this.start(this.$route.query)
    }
    //监听路由变化
    @Watch('$route')
    onRouteChanged(route: any, oldRoute: any) :void {
        this.start(route.query)
        this.$forceUpdate()
    }
    /**
     * 搜索
     */
    public search():void {
        let _this = this;
        let data = Utils.deep(this.formInline)
        this.$store.dispatch('paramsUrl',data).then((res:any) => {
            this.$router.push(`${this.$route.path}${res}`)
        })
    }
    /**
     * 编辑
     */
    private handleClick(item:any){
        sysMenuEdit(item.id)
            .then((res:any)=>{
                if (res.code==0){
                    this.form = res.data
                    this.form.parentId = Number(this.form.parentId)
                    this.centerDialogVisible = true
                } else {
                    this.$message(res.msg);
                }
            },(error:any)=>{
                console.log(error)
            })
    }
    /**
     * 开始执行
     * query 当前url上的搜索参数
     */
    public start (query:any){
        this.loading = true;
        // 深拷贝
        this.formInline = Utils.deep(query)
        if(!this.formInline.pageNum){
            this.formInline.pageNum = 1
            this.formInline.pageSize = 20
        }
        sysMenuPage(this.formInline)
            .then((res:any) => {
                this.loading = false;
                if(res.code==0){
                    let arr:object[] = [];
                    this.tableData = res.data.list;
                    for (let item of this.tableData) {
                        if (item.type==1){
                            arr.push(item)
                        }
                    }
                    this.oneList = arr
                    this.Paginationtotal = res.data.total;
                }else{
                    this.$message(res.data)
                }
            }).catch(() => {
            this.loading = false;
        });
    }
    /**
     * 提交用户信息
     */
    private addUserList(){
        let that = this;
        if (this.form.id){
            sysMenuUpdate(this.form)
                .then((res:any)=>{
                    if (res.code==0){
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                        that.start(this.$route.query)
                        that.centerDialogVisible = false
                    } else {
                        this.$message(res.data.msg);
                    }
                },(error:any)=>{
                    this.$message(error.data.msg);
                })
        } else {
            sysMenuAdd(this.form)
                .then((res:any)=>{
                    if (res.code==0){
                        this.$message({
                            type: 'success',
                            message: '创建成功!'
                        });
                        that.start(this.$route.query)
                        that.centerDialogVisible = false
                    } else {
                        this.$message(res.data.msg);
                    }
                },(error:any)=>{
                    this.$message(error.data.msg);
                })
        }
    }
    private centerDialogAdd() {
        this.form = {};
        this.centerDialogVisible = true
    }
    // 查看新增插件
    private centerDialogPlugin() {
        this.$router.push({name: 'permissionAdd'})
    }
    private deactivated() {
        // console.log(4);
    }
}