import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'

const app = createApp(App)
app.use(plugin, defaultConfig)
app.use(router)



app.mount('#app')
