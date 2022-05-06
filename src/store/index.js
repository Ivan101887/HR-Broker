import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    customList: [],
    isAuthenticated: false,
  },
  getters: {
    customList: (state) => state.customList,
    isAuthenticated: (state) => state.isAuthenticated,
  },
  mutations: {
    ADD_MEMBER(state, member) {
      state.customList.push(member);
    },
    SET_AUTHENTICATED(state, boolean) {
      state.isAuthenticated = boolean;
    },
  },
  actions: {
    addMember(context, member) {
      context.commit('ADD_MEMBER', member);
    },
    setAuthenticated(context, boolean) {
      context.commit('SET_AUTHENTICATED', boolean);
    },

  },
  modules: {
  },
});
