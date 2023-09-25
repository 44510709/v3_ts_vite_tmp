# H5 通用模板

## Project setup

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run dev
```

### Compiles and minifies for production

```shell
npm run build:prod
```

### Lints and fixes files

```shell
npm run lint
```

### Typescript

```shell
npm run vtsc
```

### unplugin-vue-components

组件自动加载插件，仅支持.vue 格式文件，目前以下组件加入自动加载，无需额外 import

- /src/components
- vant

### unplugin-auto-import

方法自动引入插件，目前以下方法加入自动加载，无需额外 import

- vue
- vue-router
- pinia

### 应用技术栈

- vant
- unocss
- axios
- day.js
- pinia
- mitt

### env.\*\*.local

本地测试环境对应配置，此类型文件也未上传 git，配置示例如下

```javascript
// .env.development.local

NODE_ENV = 'local';
VITE_NODE_ENV = 'local';
```
