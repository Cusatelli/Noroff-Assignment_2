import { createRouter, createWebHistory } from 'vue-router';
import Start from './views/Start.vue';
import Login from './views/Login.vue';
import store from './store';
import Options from './views/Options.vue'
import Game from './views/Game.vue'
import Results from './views/Results.vue'

const authGuard = (_to, _from, next) => {
    if(store.state.user) {
        next('/options')
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
        component: Login, // For devs
        beforeEnter: authGuard
    },
    {
        path: "/options", // Options
        component: Options // Options
    },
    {
        path: "/game", // game
        component: Game // Game
    },
    {
        path: "/results", // results
        component: Results // Results
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
