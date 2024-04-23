import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import TabRoot from './components/TabRoot.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('./views/LoginPage.vue'),
  },
  {
    path: '/app',
    component:() => import('./components/TabRoot.vue'),
    children: [
      {
        path: 'text',
        component: () => import('./views/HomePage.vue'),
      },
      {
        path: 'emoji',
        component: () => import('./views/EmojiPage.vue'),
      },
      {
        path: 'date',
        component: () => import('./views/DatePage.vue'),
      },
      {
        path: 'weather',
        component: () => import('./views/WeatherPage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*', 
    redirect: '/' 
  }
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;