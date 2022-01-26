import { createRouter, createWebHistory } from 'vue-router';
import Start from './views/Start.vue';
import Login from './views/Login.vue';
import store from './store';
import Options from './views/Options.vue'
import Game from './views/Game.vue'
import Results from './views/Results.vue'

const loginGuard = (_to, _from, next) => {
    if(store.state.user) {
        next('/options')
    } else {
        next()
    }
}

const optionsGuard = (_to, _from, next) => {
    if(!store.state.user) {
        next('/login')
    } else {
        next()
    }
}

const gameGuard = (_to, _from, next) => {
    if(!store.state.user) {
        next('/login')
    } else {
        if(!store.state.inputs) {
            next('/options')
        } else {
            next()
        }
    }
}

const resultsGuard = (_to, _from, next) => {
    if(!store.state.user) {
        next('/login')
    } else {
        if(!store.state.results) {
            next('/options')
        } else {
            next()
        }
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
        beforeEnter: loginGuard
    },
    {
        path: "/options",
        component: Options,
        beforeEnter: optionsGuard
    },
    {
        path: "/game",
        component: Game,
        beforeEnter: gameGuard
    },
    {
        path: "/results",
        component: Results,
        beforeEnter: resultsGuard
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
