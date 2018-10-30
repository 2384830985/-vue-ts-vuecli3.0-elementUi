

<template>
    <div>
        <newTab></newTab>
        <div class="t-p-content-10">
            <div class="t-container">
                <!-- 发布按钮 -->
                <div class="t-mini-buttom">
                    <el-button size="mini" type="primary">发布商品</el-button>
                </div>
                <!-- 搜索条件 -->
                <div class="t-search-content">
                    <el-form :model="formInline" label-position="right" class="demo-form-inline" size="mini" label-width="140px">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="开始时间:">
                                    <el-date-picker style="width:80%"
                                                    v-model="formInline.startDate"
                                                    type="datetime"
                                                    value-format="yyyy-MM-dd HH:mm:ss"
                                                    placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="结束时间">
                                    <el-date-picker style="width:80%"
                                                    v-model="formInline.endDate"
                                                    type="datetime"
                                                    value-format="yyyy-MM-dd HH:mm:ss"
                                                    placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="商品名称:">
                                    <el-input v-model="formInline.name" class="w-80" placeholder="商品名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="三方商品编号:">
                                    <el-input v-model="formInline.thirdProductId" class="w-80" placeholder="三方商品编号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="三方商品sku:">
                                    <el-input v-model="formInline.thirdSku" class="w-80" placeholder="三方商品sku"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="商品id:">
                                    <el-input v-model="formInline.id" class="w-80" placeholder="商品id"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="商品类型:">
                                    <el-select v-model="formInline.categoryId" class="w-80" placeholder="请选择商品类型">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="站点:">
                                    <el-select v-model="formInline.siteId" class="w-80" placeholder="站点">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="">
                                    <el-button type="primary" @click="search">筛选</el-button>
                                    <Reset :searchReserved="searchReserved"></Reset>
                                    <el-button>批量导出</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <!-- 表格 -->
                <el-table
                    :data="tableData6"
                    border
                    style="width: 100%; margin-top: 20px">
                    <el-table-column
                    prop="id"
                    label="ID"
                    align="center"
                    >
                    </el-table-column>
                </el-table>
                <Pagination :Paginationtotal="Paginationtotal"></Pagination>
            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import newTab from '@/views/layout/content/newtab.vue';
import Reset from '@/components/reset/reset.vue'
import Pagination from '@/components/pagination/pagination.vue'
import Utils from '@/utils/utils'
import Verification from '@/components/verification/verification.ts';
import { Component, Vue, Model, Watch } from 'vue-property-decorator';

interface commodity {
    startDate?: string,
    endDate?: string,
    name?: string,
    thirdProductId?: string,
    thirdSku?: string,
    id?: string,
    categoryId?: string,
    siteId?: string,
}

@Component({   
    components: {
        newTab,
        Reset,
        Pagination
    }
})
export default class Content extends Vue {
    public tableData6:any = [];
    public searchReserved = {
        name: '1111'
    }
    private Paginationtotal:number = 100;
    //定义当前的搜索标格
    public formInline:commodity = {};
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
     * 开始执行
     * query 当前url上的搜索参数
     */
    public start (query:any){
        // 深拷贝
        this.formInline = Utils.deep(query)
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
    .el-form-item__label {
        font-size: 1px;
        color: rgb(220, 220, 220);
        line-height: 40px;
        padding: 0 12px 0 0;
        font-weight: 300
    }
</style>