import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'view',
        meta: {
          title: '长城汽车',
          auth: false,
        },
        component: () => import('@/views/index.vue'),
      },
    ],
  },
];

export default routes;
