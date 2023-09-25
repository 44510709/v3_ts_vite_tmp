import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import routerGuard from './routerGuard';
import index from './modules/index';

const routes: Array<RouteRecordRaw> = [
  ...index,

  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('@/views/404/index.vue'),
  },

  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
});

// 路由守卫
routerGuard(router);

export default router;
