import App from './App.vue'
import router from './router';
import { createApp } from 'vue'
import vuetify from './plugins/vuetify';
import pinia from './plugins/pinia'
import '@/scss/style.scss';
import './plugins/yup';
import './plugins/axios'

const app = createApp(App)
app
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
