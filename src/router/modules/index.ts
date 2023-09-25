import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'view',
        meta: {
          title: '汽车',
          auth: false,
        },
        component: () => import('@/views/index.vue'),
      },
    ],
  },
];

export default routes;
