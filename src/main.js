import { createApp } from 'vue';
import './style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router/index.js';
createApp(App)
    .use(router)
    .use(Antd)
    .mount('#app');
//# sourceMappingURL=main.js.map