import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import store from '@/store/index';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(VueRouter, vueAxios, axios);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { requiresAuth: true },
    component: () => import('@/views/AdminView.vue'),
  },
  {
    path: '/customer',
    name: 'customer',
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const { customList } = store.getters;
      if (!customList.length) {
        next('/admin');
      } else {
        next();
      }
    },
    component: () => import('@/views/CustomerView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LogInView.vue'),
  },
  {
    path: '/*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const config = {
      params: {
        results: 1,
        seed: 'myRandomUser',
        inc: 'login,email',
      },
    };
    const url = 'https://randomuser.me/api/';
    if (document.cookie) {
      try {
        const res = await Vue.$http.get(url, config);
        const results = res.data.results[0];
        const token = results.login.uuid;
        if (document.cookie.includes(token)) {
          next();
        } else {
          store.dispatch('setAuthenticated', false);
          document.cookie = 'logIn = c4f42e99-8b27-4115-a064-2f78987b9d47 ; expires=Thu, 01 Jan 1970 00:00:00 UTC';
          next('/login');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      next('/login');
    }
  } else if (to.name === 'login') {
    const { isAuthenticated } = store.getters;
    if (isAuthenticated) {
      next('/admin');
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
