import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Definindo as feature flags do Vue
app.config.globalProperties.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

app.use(router).mount('#app');
