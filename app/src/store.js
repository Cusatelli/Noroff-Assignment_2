import { createStore } from 'vuex'
import { apiGenerateURL } from './api/apiURL'

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
        inputs: {},
        questions: {}
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
        setQuestions: (state, questions) => {
            state.questions = questions
        }
    },
    actions: {
        async inputOptions({ commit }, { difficulty, category, type, numberOfQuestions }) {
            // Clamp
            if (numberOfQuestions > 10) {
                numberOfQuestions = 10;
                console.log(`Oops! You can not have more than ${numberOfQuestions} questions!`);
            } else if (numberOfQuestions < 2) {
                numberOfQuestions = 2;
                console.log(`Oops! You can not have less than ${numberOfQuestions} questions!`);
            }
            if (type === "multiple choice") { type = "multiple"; }
            else { type = "boolean"; }

            const inputs = {
                difficulty: difficulty || "easy",
                category: category || (Math.floor(Math.random() * 23) + 9) + "", // Random number between 9 & 32
                type: type || "multiple",
                numberOfQuestions: numberOfQuestions || "5"
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
