// 批量图片上传（详情）
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


<style lang="scss">
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9!important;
        border-radius: 6px!important;
        cursor: pointer!important;
        position: relative!important;
        overflow: hidden!important;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF!important;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>