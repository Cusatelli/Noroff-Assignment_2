import { createRouter, createWebHistory } from 'vue-router';

import Start from './views/Start.vue';
import AuthGuard from './views/AuthGuard.vue';
import Options from './views/Options.vue'
import Game from './views/Game.vue'

const routes = [
    {
        path: "/",
        component: Start
    },
    {
        path: "/login", // For users
        component: AuthGuard // For devs
    },
    {
        path: "/options", // Options
        component: Options // Options
    },
    {
        path: "/game", // game
        component: Game // Game
    }
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
