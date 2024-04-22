import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabRoot from './components/TabRoot.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: TabRoot,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('./views/HomePage.vue'),
      },
      {
        path: 'radio',
        component: () => import('./views/DatePage.vue'),
      },
      {
        path: 'library',
        component: () => import('./views/EmojiPage.vue'),
      },
      {
        path: 'search',
        component: () => import('./views/WeatherPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;