// 单张图片上传（头像）
<template>
    <div>
        <el-upload
                class="avatar-uploader"
                :action="$store.state.imgUrl"
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

        // 初始值
        @Prop(String)BeforeUploadImg:string;

        //最先开始执行
        created():void {
            // tinyMce.init({})
        }

        private obj: string[] = []

        public handleAvatarSuccess(res:any, file:any) {
            // 本地图片预览;
            // this.imageUrl = URL.createObjectURL(file.raw);
            this.$emit('update:BeforeUploadImg',res.data[0].newFileName);
            console.log(res)
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