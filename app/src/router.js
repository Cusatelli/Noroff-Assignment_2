import { createRouter, createWebHistory } from 'vue-router';
import Start from './views/Start.vue';
import AuthGuard from './views/AuthGuard.vue';
import store from './store';
import Options from './views/Options.vue'
import Game from './views/Game.vue'

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
