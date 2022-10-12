import { createApp } from 'vue'
import App from './App.vue'
import VuePapaParse from 'vue-papa-parse'

import './assets/main.css'

const app = createApp(App)
app.mount('#app')
app.use(VuePapaParse)
