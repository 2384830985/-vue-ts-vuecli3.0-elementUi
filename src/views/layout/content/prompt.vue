<style scoped lang="scss">
    .t-container-navbar{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .t-container-tow{
            width: 100%;
            overflow: auto;
            background: #fff;
            .t-container-header{
                padding-left: 20px;
                height: 50px;
                line-height: 50px;
                font-size: 12px;
                border-bottom: 1px solid #f2f2f2;
                box-sizing: border-box;
            }
        }
    }
  

</style>

<template>
    <div class="t-container-navbar">
        <div class="t-container-tow">
            <div class="t-container-header">帮助和服务</div>
        </div>
    </div>  
</template>

<script lang="ts">
import Verification from '@/components/verification/verification.ts';
import { Component, Vue, Model } from 'vue-property-decorator';

@Component({})
export default class Prompt extends Vue {
    created():void {
        console.log(this.$route.meta);
        console.log(1);
    }
    private activated() {
        console.log(2);
    }
    private deactivated() {
        console.log(4);
    }
}
</script>


