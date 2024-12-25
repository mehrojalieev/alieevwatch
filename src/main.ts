import './style.scss'
import i18n from './i18n'
import App from './App.vue'
import router from './routes'
import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import PrimeVue from "primevue/config"


import 'primeicons/primeicons.css';

import Select from 'primevue/select';
import Carousel from 'primevue/carousel'


const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.component('Select', Select);
app.component('Carousel', Carousel);

app.use(i18n)

app.mount('#app')

