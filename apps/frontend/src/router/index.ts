import { createRouter, createWebHistory } from 'vue-router'

// we import RouteRecordRaw like this because this is expected by verbatimModuleSyntax setting in TS, where importing types requires type-only imports
import type { RouteRecordRaw } from 'vue-router'

import LoginView from '../views/LoginView.vue'

// RouteRecordRaw is a type that represents a single route in the router.
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;