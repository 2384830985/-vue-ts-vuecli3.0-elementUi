<template>
    <div>
        <newTab></newTab>
        <div class="t-p-content-10">
            <div class="t-container">
                <!--当前状态-->
                <div class="t-container-permission">
                    <div class="t-container-title">
                        <div class="t-container-headerA">1. 编辑基本信息</div>
                    </div>
                    <div class="t-container-title">
                        <div class="t-container-headerB">2. 编辑商品详情</div>
                    </div>
                </div>
                <div class="t-permission-type">商品类型</div>
                <el-form :model="formInline" label-position="right" class="demo-form-inline" size="mini" label-width="100px">
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-form-item label="状态:">
                                <el-select v-model="formInline.isDel" class="w-460" placeholder="请选择权限状态">
                                    <!--<el-option v-for="item in userIsDel" :value="item.val" :label="item.title"></el-option>-->
                                </el-select>
                            </el-form-item>
                            <el-form-item label="图文详情:">
                                <Editor :EditorContent.sync="EditorContent"></Editor>
                            </el-form-item>
                            <el-form-item label="简介图片:">
                                <BeforeUpload :BeforeUploadImg.sync="BeforeUploadImg"></BeforeUpload>
                            </el-form-item>
                            <el-form-item label="List图片:">
                                <UploadListImg :UploadListsImg.sync="UploadListsImg"  @removeListImg="removeListImg" style="width: 400px"></UploadListImg>
                            </el-form-item>
                        </el-col>

                    </el-row>
                </el-form>
            </div>
            <div class="t-app-actions">
                <div class="t-app-actions-content">
                    <el-button size="mini" type="primary" @click="siblime">保存</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import newTab from '@/views/layout/content/newtab.vue';
    import method from '@/views/method/method';
    import { sysMenuPage } from '@/views/interface/system';
    import Utils from '@/utils/utils';
    import Editor from '@/components/tinyMceEditor/tinyMceEditor.vue';
    import UploadListImg from '@/components/uploadListImg/uploadListImg.vue';
    import BeforeUpload from '@/components/beforeUpload/beforeUpload.vue';
    import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator';
    @Component({
        components: {
            newTab,
            BeforeUpload,
            UploadListImg,
            Editor
        }
    })
    export default class Content extends Vue {
        public formInline: any = {};
        // 默认图文详情
        public EditorContent: string = '';
        // 默认图片
        public BeforeUploadImg: string = '';
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
        public removeList: object[] = [];
        public removeListImg(res:any){
            this.removeList.push(res)
        }
        public siblime(){
            console.log(this.EditorContent)
            console.log(this.BeforeUploadImg)
            console.log(this.removeList)
        }
        //最先开始执行
        created():void {
            this.start(this.$route.query);
        }
        //监听路由变化
        @Watch('$route')
        onRouteChanged(route: any, oldRoute: any) :void {
            this.start(route.query)
            this.$forceUpdate()
        }
        /**
         * 开始执行
         * query 当前url上的搜索参数
         */
        public start (query:any){
            sysMenuPage({})
                .then((res:any) => {
                    if(res.code==0){
                        // this.tableData = res.data.list;
                        // this.Paginationtotal = res.data.total;
                        console.log(res.data.total)
                    }else{
                        // this.loading = false;
                        // this.$message(res.data)
                    }
                    console.log(res)
                }).catch(() => {
                // this.loading = false;
            });
        }
        public activated() {
            console.log(2);
        }
        public deactivated() {
            console.log(4);
        }
    }
</script>


<style src="./style.scss" lang="scss" scoped></style>
<style scoped lang="scss">

</style>