import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      next();
      if (from.fullPath === '/admin' || from.fullPath === '/customer') {
        window.location.reload(true);
      }
    },
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { requiresAuth: true },
    beforeEnter: async (to, from, next) => {
      const { isAuthenticated } = store.getters;
      if (!isAuthenticated) {
        next('/login');
      } else {
        next();
      }
    },
    component: () => import('@/views/AdminView.vue'),
  },
  {
    path: '/customer',
    name: 'customer',
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const { isAuthenticated } = store.getters;
      const { customList } = store.getters;
      if (!isAuthenticated) {
        next('/login');
      } else {
        next();
      }
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
    beforeEnter: (to, from, next) => {
      const { isAuthenticated } = store.getters;
      if (isAuthenticated) {
        next('/admin');
      } else {
        next();
      }
    },
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

export default router;
