import { createApp } from 'vue';
import App from './App.vue';
import { IonicVue } from '@ionic/vue';

import router from './router';

import '@ionic/vue/css/ionic.bundle.css';
const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
