import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Products from "./components/Products.vue";

const routes = [
    {
        path: '',
        redirect: { name: 'Login' }
    },
    {
      name: 'Products',
      path: '/products',
      component: Products
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        beforeEnter() {
            const token = localStorage.getItem('token');
            if (token) router.push({ name: 'Products' })
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;