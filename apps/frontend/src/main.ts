import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import { ToastService } from 'primevue'
import { ConfirmationService } from 'primevue'
import Aura from '@primeuix/themes/aura'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
})
app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)

app.mount('#app')