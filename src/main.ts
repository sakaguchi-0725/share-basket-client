import { createApp } from 'vue'
import App from './app/app.vue'
import { createAppRouter } from './app/routes'

const app = createApp(App)
const router = createAppRouter('web')
app.use(router)
app.mount('#app')
