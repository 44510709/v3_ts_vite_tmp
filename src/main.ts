import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//组件间的通信 事件总线
import emitter from '@/utils/ emitter'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
