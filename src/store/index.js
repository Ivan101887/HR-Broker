import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    customList: [],
    isAuthenticated: document.cookie.includes('isLogIn'),
  },
  getters: {
    customList: (state) => state.customList,
    isAuthenticated: (state) => state.isAuthenticated,
  },
  mutations: {
    ADD_MEMBER(state, id) {
      state.customList.push(id);
    },
    REMOVE_MEMBER(state, id) {
      const index = state.customList.indexOf(id);
      if (index !== -1) {
        state.customList.splice(index, 1);
      }
    },
  },
  actions: {
    addMember(context, id) {
      context.commit('ADD_MEMBER', id);
    },
    removeMember(context, id) {
      context.commit('REMOVE_MEMBER', id);
    },
  },
  modules: {
  },
});
