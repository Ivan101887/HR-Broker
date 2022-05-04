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
    path: '/members',
    name: 'members',
    component: () => import('@/views/MembersView.vue'),
  },
  {
    path: '/custom',
    name: 'custom',
    component: () => import('@/views/CustomView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
