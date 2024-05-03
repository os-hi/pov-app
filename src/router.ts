import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import RegisterPage from './views/RegisterPage.vue';

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/app',
    component: () => import('./components/TabRoot.vue'),
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
      {
        path: 'color',
        component: () => import('./views/ColorPage.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: RegisterPage,
  },

  {
    path: '/:pathMatch(.*)*', 
    redirect: '/login', 
  }
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;