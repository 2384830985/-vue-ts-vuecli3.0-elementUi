// 重置按钮
<style scoped lang="scss">
    
</style>

<template>
    <el-button size="mini" @click="reset(searchReserved)">重置</el-button>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from 'vue-property-decorator';

@Component({
})
export default class Reset extends Vue {
    // props声明
    @Prop() private searchReserved!:object
    private reset(search:any) {
        [search.pageNum,search.pageSize] = [1,20]
        this.$store.dispatch('paramsUrl',search).then((res:any) => {
            this.$router.push(`${this.$route.path}${res}`)
        })
    }
}
</script>


