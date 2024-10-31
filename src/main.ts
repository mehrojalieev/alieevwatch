import './style.scss'
import App from './App.vue'
import router from './routes'
import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import PrimeVue from "primevue/config"


import 'primeicons/primeicons.css';

import Select from 'primevue/select';


const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.component('Select', Select);


app.mount('#app')

