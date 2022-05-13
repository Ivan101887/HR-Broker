import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customList: [],
    isAuthenticated: !!document.cookie.split(';').find((item) => item.startsWith('c4f42e99-8b27-4115-a064-2f78987b9d47')).split('=')[1],
    isShow: false,
  },
  getters: {
    customList: (state) => state.customList,
    isAuthenticated: (state) => state.isAuthenticated,
    isShow: (state) => state.isShow,
  },
  mutations: {
    SET_MEMBER(state, arr) {
      state.customList = [...new Set(state.customList.concat(...arr))];
    },
    SET_IS_SHOW(state, Boolean) {
      state.isShow = Boolean;
    },
  },
  actions: {
    setMember(context, arr) {
      context.commit('SET_MEMBER', arr);
    },
    setIsShow(context, Boolean) {
      context.commit('SET_IS_SHOW', Boolean);
    },
  },
  modules: {
  },
});
