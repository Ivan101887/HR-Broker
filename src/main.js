import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';
import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/normalize.scss';
import '@/assets/scss/reset.scss';
import '@/assets/scss/helper.scss';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyBR4NNsbHxHPjyGYm4uBg5ZPmXzPBm16ls',
  authDomain: 'hr-broker.firebaseapp.com',
  projectId: 'hr-broker',
  storageBucket: 'hr-broker.appspot.com',
  messagingSenderId: '362602319499',
  appId: '1:362602319499:web:6564d6a0baf70f9b744e8e',
  measurementId: 'G-DFZWN8B2FB',
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

Vue.use(vueAxios, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
