import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customList: [],
    isAuthenticated: document.cookie.includes('isLogIn'),
  },
  getters: {
    customList: (state) => state.customList,
    isAuthenticated: (state) => state.isAuthenticated,
  },
  mutations: {
    SET_MEMBER(state, arr) {
      state.customList = [...new Set(state.customList.concat(...arr))];
    },
  },
  actions: {
    setMember(context, arr) {
      context.commit('SET_MEMBER', arr);
    },
  },
  modules: {
  },
});
