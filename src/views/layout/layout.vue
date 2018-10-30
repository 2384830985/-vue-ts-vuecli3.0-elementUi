<template>
    <div>
        <div class="t-container">
            <div class="t-navbar-con">
                <!-- 左侧导航 -->
                <Navbar></Navbar>
            </div>
            <!-- 主要内容 -->
            <div class="t-po-r">
                <AppMain></AppMain>
                <div class="AppMainBo">欢迎来到悦店后台管理系统</div>
                <div class="t-prompt-content">
                    <Prompt></Prompt>
                </div>
            </div>
        </div>  
    </div>
</template>

<script lang="ts">
import { AppMain, Navbar, Prompt } from '@/views/layout/content'
import { Component, Vue, Model } from 'vue-property-decorator';
import { publicEncrypt } from 'crypto';

@Component({
    components: {
        Navbar,
        AppMain,
        Prompt,
    }
})
export default class Home extends Vue {
    private fullscreenLoading:boolean = false
    created() {
        
    //   manageSysRoleMenuUserId()

    }
}
</script>


<style src="./style.scss" lang="scss" scoped></style>