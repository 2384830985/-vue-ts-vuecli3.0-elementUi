// 分页
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
        this.$forceUpdate()
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


