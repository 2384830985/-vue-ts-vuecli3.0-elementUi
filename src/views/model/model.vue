<style scoped lang="scss">
    
</style>

<template>
    <div class="home-container">
        <router-link to="/home/content">content</router-link>
        <input type="text">
    </div>  
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';

@Component({})
export default class Modele extends Vue {
    created() {
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


