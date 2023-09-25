import type { App } from 'vue';

const install = (app: App<Element>) => {
  app.directive('longpress', {
    mounted(el: Element, binding: any) {
      const PRESS_TIME = 1000; // 长按时间

      if (typeof binding.value !== 'function') {
        console.warn('长按事件参数必须为函数类型');
        return false;
      }

      let pressTimer: number;
      const start = (ev: Event): void => {
        pressTimer = window.setTimeout(() => {
          handler(ev);
        }, PRESS_TIME);
      };
      const cancel = (): void => {
        clearTimeout(pressTimer);
      };
      const handler = (ev: Event): void => {
        binding.value(ev, binding.arg);
      };

      el.addEventListener('touchstart', start);
      el.addEventListener('touchend', cancel);
      el.addEventListener('touchmove', cancel);
      el.addEventListener('touchcancel', cancel);
    },
  });
};

export default install;
