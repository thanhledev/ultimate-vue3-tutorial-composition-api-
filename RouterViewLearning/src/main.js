import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import './assets/main.css'

const app = createApp(App)

// use router
app.use(router)

// mount the vue3 app
app.mount('#app')
