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
        inputs: null
    },
    getters: {

    },
    mutations: {
        setUser: (state, user) => {
            state.user = user
        },
        setInputs: (state, inputs) => {
            state.inputs = inputs
        },
    },
    actions: {
        async send_inputs_to_game(context, inputs) {
            try {
                console.log(inputs.difficulty)
                if (!inputs.difficulty) {
                    throw new Error('no difficulty added: [' + action + ']')
                }
                // if (context !== inputs) {
                //     throw new Error('unknown action provided: [' + action + ']')
                // }


                const [error, inputs] = [null, inputs]



                if (error !== null) {
                    throw new Error(error)
                }

                commit('setInputs', inputs) // commit = mutations
                localStorage.setItem('inputs', JSON.stringify(inputs))

                return null
            } catch (error) {
                return error.message
            }
        },
        async loginUser({ commit }, { action, username }) {
            try {
                if (action !== 'login') {
                    throw new Error('login | unknown action provided: [' + action + ']')
                }

                const [error, user] = [null, { username: username.value }]

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
