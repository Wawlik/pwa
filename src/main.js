import { createApp } from 'vue'
import { router } from './router.js'
import './style.css'
import App from './App.vue'
// import workKeys from "@/models/workKeys.js";

createApp(App)
    .use(router)
    // .use(workKeys)
    .mount('#app')
