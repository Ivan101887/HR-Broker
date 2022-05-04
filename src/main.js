import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/normalize.scss';
import '@/assets/scss/reset.scss';
import '@/assets/scss/helper.scss';

Vue.config.productionTip = false;

Vue.use(vueAxios, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
