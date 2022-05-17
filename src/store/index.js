import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customList: [],
    isAuthenticated: false,
    isShow: false,
  },
  getters: {
    customList: (state) => state.customList,
    isAuthenticated: (state) => state.isAuthenticated,
    isShow: (state) => state.isShow,
  },
  mutations: {
    SET_AUTHENTICATED(state, Boolean) {
      state.isAuthenticated = Boolean;
    },
    SET_MEMBER(state, arr) {
      state.customList = [...new Set(state.customList.concat(...arr))];
    },
    SET_IS_SHOW(state, Boolean) {
      state.isShow = Boolean;
    },
  },
  actions: {
    setAuthenticated(context, Boolean) {
      context.commit('SET_AUTHENTICATED', Boolean);
    },
    setMember(context, arr) {
      context.commit('SET_MEMBER', arr);
    },
    setIsShow(context, Boolean) {
      context.commit('SET_IS_SHOW', Boolean);
    },
  },
});
