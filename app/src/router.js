import { createRouter, createWebHistory } from 'vue-router';

import Start from './views/Start.vue';
import AuthGuard from './views/AuthGuard.vue';

const routes = [
    {
        path: "/",
        component: Start
    },
    {
        path: "/login", // For users
        component: AuthGuard // For devs
    },
    // Example:
    // {
    //     path: "/profile",
    //     component: Profile,
    //     beforeEnter: authGuard
    // }
]

export default createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
