import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue'),
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('@/views/CustomerView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LogInView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: `${process.env.BASE_URL}/#/`,
  routes,
});

export default router;
