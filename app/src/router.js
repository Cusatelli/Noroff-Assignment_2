import { createRouter, createWebHistory } from 'vue-router'
import Start from './views/Start.vue'
import Login from './views/Login.vue'
import store from './store'
import Options from './views/Options.vue'
import Game from './views/Game.vue'
import Results from './views/Results.vue'

/**
 * Function that checks if user is stored and if thats the case
 * user is passed to next page, 
 * @param {*} _to 
 * @param {*} _from 
 * @param {*} next 
 */
const loginGuard = (_to, _from, next) => {
    if (store.state.user) {
        next('/options')
    } else {
        next()
    }
}

/**
 * Function that checks if options are made and are stored and if thats the case
 * user is passed to next page, 
 * @param {*} _to 
 * @param {*} _from 
 * @param {*} next 
 */
const optionsGuard = (_to, _from, next) => {
    if (!store.state.user) {
        next('/login')
    } else {
        next()
    }
}

/**
 * If user ends Game, 
 * user is passed to login page or options, 
 * @param {*} _to 
 * @param {*} _from 
 * @param {*} next 
 */
const gameGuard = (_to, _from, next) => {
    if (!store.state.user) {
        next('/login')
    } else {
        if (!store.state.inputs) {
            next('/options')
        } else {
            next()
        }
    }
}

/**
 * If result screen is displayed, 
 * user is passed to login page or options, 
 * @param {*} _to 
 * @param {*} _from 
 * @param {*} next 
 */
const resultsGuard = (_to, _from, next) => {
    if (!store.state.user) {
        next('/login')
    } else {
        if (!store.state.results) {
            next('/options')
        } else {
            next()
        }
    }
}

/**
 * routes to all different path is stored in here
 */
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

]

export default createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
