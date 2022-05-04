import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    customList: [],
  },
  getters: {
    customList: (state) => state.customList,
  },
  mutations: {
    ADD_MEMBER(state, member) {
      state.customList.push(member);
    },
  },
  actions: {
    addMember(context, member) {
      context.commit('ADD_MEMBER', member);
    },
  },
  modules: {
  },
});
