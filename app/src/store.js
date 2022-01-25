import { createStore } from 'vuex'

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
        inputs: {}
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
        async inputOptions({ commit }, { difficulty, category, type, numberOfQuestions }) {
            const inputs = {
                difficulty: difficulty.value,
                category: category.value,
                type: type.value,
                numberOfQuestions: numberOfQuestions.value
            }

            commit('setInputs', inputs);
            localStorage.setItem('options', JSON.stringify(inputs));
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
