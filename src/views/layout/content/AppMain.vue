<style scoped lang="scss">
</style>

<template>
    <div>
        <div>
            <!--<keep-alive>-->
                <!--<router-view></router-view>-->
            <!--</keep-alive>-->
            <router-view></router-view>
        </div>
    </div>  
</template>

<script lang="ts">
import Verification from '@/components/verification/verification.ts';
import { Component, Vue, Model } from 'vue-property-decorator';

@Component({})
export default class AppMain extends Vue {
    created():void {
        // console.log(this.$route.meta);
        // console.log(1);
    }
    private activated() {
        // console.log(2);
    }
    private deactivated() {
        // console.log(4);
    }
}
</script>


