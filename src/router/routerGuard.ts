import type { Router } from 'vue-router';
import { UserStore } from '@/store/modules/users';

export default (router: Router) => {
  router.beforeEach((to, _, next) => {
    const userStore = UserStore();

    if (to.meta.title) {
      document.title = String(to.meta.title);
    }

    if (!userStore.token) {
      // todo 获取用户信息
    }

    if (to.meta.auth && !userStore.token) {
      // todo H5登录
    }

    next();
  });
};
