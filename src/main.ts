import Vue from 'vue';
import App from './App.vue';
import * as ElementUI from 'element-ui';
import router from './router';
import Vfilters from '@/views/filters/filters';
import store from '@/views/store/store';
import './assets/index.css';
import './permission';

for (const key in Vfilters) {
  Vue.filter(key, Vfilters[key]);
}

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

