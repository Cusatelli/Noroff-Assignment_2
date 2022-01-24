import { createStore } from 'vuex'
//import { apiLoginUser } from "./api/users"

const initUser = () => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) {
        return null
    }

    return JSON.parse(storedUser)
}

export default createStore({
    state: {
        user: initUser(),
    },
    getters: {

    },
    mutations: {
        setUser: (state, user) => {
            state.user = user
        },
    },
    actions: {
        async loginUser({ commit }, { action, username }) {
            try {
                if (action !== 'login') {
                    throw new Error('login | unknown action provided: [' + action + ']')
                }

                const [error, user] = ["OOPS!", { username: username.value }]

                // const [error, user] = await apiLoginUser(
                //     action,
                //     username.value,
                // )

                if (error !== null) {
                    throw new Error(error)
                }

                commit('setUser', user) // commit = mutations
                localStorage.setItem('user', JSON.stringify(user))

                return null
            } catch (error) {
                return error.message
            }
        }
    }
})
