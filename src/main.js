import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/normalize.scss';
import '@/assets/scss/reset.scss';
import '@/assets/scss/helper.scss';

library.add(faCopyright, faPersonDress, faPerson);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(vueAxios, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
