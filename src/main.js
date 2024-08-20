/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
// import BootstrapVue from 'bootstrap-vue'
import 'sweetalert2/dist/sweetalert2.min.css';
// Impor CSS Bootstrap dan BootstrapVue

// Composables
import { createApp } from 'vue'

import "./assets/style.css"
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)

registerPlugins(app)
app.use(VueSweetalert2);
// Vue.use(BootstrapVue)

app.mount('#app')
