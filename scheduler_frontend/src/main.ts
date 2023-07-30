import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
createApp(App).mount('#app')

const routes = [
    {
        path: '/', component: App
    }
]
//
// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })