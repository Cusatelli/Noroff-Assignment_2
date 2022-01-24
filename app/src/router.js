import { createRouter, createWebHistory } from 'vue-router';

import Start from './views/Start.vue';
import AuthGuard from './views/AuthGuard.vue';
import store from './store';

const authGuard = (_to, _from, next) => {
    if(store.state.user) {
        next('/')
    } else {
        next()
    }
}

const routes = [
    {
        path: "/",
        component: Start
    },
    {
        path: "/login", // For users
        component: AuthGuard, // For devs
        beforeEnter: authGuard
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
