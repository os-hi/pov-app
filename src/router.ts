// Import necessary modules and components
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import RegisterPage from './views/RegisterPage.vue';

// Define routes
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

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Export router instance
export default router;
