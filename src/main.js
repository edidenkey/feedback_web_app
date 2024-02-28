import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'


import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//Pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  directives,
  components: {
    ...components,
    ...labs,
  },
});

const app = createApp(App);
app.use(pinia);
app.use(vuetify);
const options = {
  position: POSITION.TOP_RIGHT,
};
app.use(Toast, options);
app.mount("#app");
