import { createApp } from 'vue'
import App from './App.vue'

import { loadFonts } from './plugins/webfontloader'
import './styles/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

import router from "./router.js";


loadFonts()

createApp(App)
    .use(VueAxios, axios)
    .use(vuetify)
    .use(router)
    .mount('#app')

