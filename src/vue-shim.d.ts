import Vue from 'vue';
// 声明全局方法
declare module 'vue/types/vue' {
    interface Vue {
        $Message: any;
        $Modal: any;
    }
}
