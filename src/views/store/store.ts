import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import state from './state';
import mutations from './mutations';
Vue.use(Vuex);

const store = new Vuex.Store({
  // modules: {
  //   user
  // },
  state,
  mutations,
  actions,
  getters
});

export default store