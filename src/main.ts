import { createApp } from 'vue';
import type { App } from 'vue';
import type { Emitter, EventType } from 'mitt';
import 'virtual:windi.css';
import 'vant/es/dialog/style';
import 'vant/es/toast/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import mitt from 'mitt';
import Filter from '@/utils/filter';
import Router from '@/router';
import Store from '@/store';
import Main from './App.vue';
import Directive from './directive';
import { Lazyload } from 'vant';
import defLoadingImg from '@/assets/def_loading.png';

// 扩展全局方法
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $eventBus: Emitter<Record<EventType, unknown>>;
    [key: string]: any;
  }
}

const app: App<Element> = createApp(Main);

const eventBus: Emitter<Record<EventType, unknown>> = mitt();
app.config.globalProperties.$eventBus = eventBus;

app.use(Store);
app.use(Lazyload, {
  loading: defLoadingImg,
  error: defLoadingImg,
});
app.use(Router);
app.use(Filter);
app.use(Directive);

app.mount('#app');
