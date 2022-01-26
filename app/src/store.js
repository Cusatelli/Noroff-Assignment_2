import { createStore } from 'vuex'
import { API_KEY, API_URL } from './api'

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
        inputs: null,
        questions: null,
        results: null
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
        },
        setResults: (state, results) => {
            state.results = results
        }
    },
    actions: {
        async gameResults({ commit }, { questions, answers, correctAnswers }) {
            // Compare answers and correct answers.
            let results = 0;
            for (let index = 0; index < correctAnswers.length; index++) {
                const correctAnswer = correctAnswers[index];
                const answer = answers[index];
                if (correctAnswer === answer) {
                    results += 10;
                }
            }

            const gameResults = { questions, answers, correctAnswers, results };
            commit('setResults', gameResults);
        },
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
        async updateUserInfo({ commit }, { userID, highScore }) {
            try {
                fetch(`${API_URL}/trivia/${userID}`, {
                    method: 'PATCH', // NB: Set method to PATCH
                    headers: {
                        'X-API-Key': API_KEY,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // Provide new highScore to add to user with id 1
                        highScore: 0
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Could not update high score')
                    }
                    return response.json()
                })
                .then(updatedUser => {
                    // updatedUser is the user with the Patched data
                })
            } catch (error) {
                return error.message;
            }
        },
        async loginUser({ commit }, { action, username }) {
            try {
                if (action !== 'login') {
                    throw new Error('login | unknown action provided: [' + action + ']')
                }

                const user = fetch(`${API_URL}/trivia?username=${username.value}`)
                    .then(response => response.json())
                    .then(results => {
                        // results will be an array of users that match the username of mega-mind.
                        console.log(results);
                        if (results.length > 0) {
                            // Login as that user
                            return username.value;
                        } else {
                            // Create and login user
                            fetch(`${API_URL}/trivia`, {
                                method: 'POST',
                                headers: {
                                    'X-API-Key': API_KEY,
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    username: username.value,
                                    highScore: 0
                                })
                            })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Could not create new user')
                                }
                                return response.json()
                            })
                            .then(newUser => newUser)
                            .catch(error => {
                                
                            })
                        }
                    })

                console.log(user);
                commit('setUser', user) // commit = mutations

                return null
            } catch (error) {
                return error.message
            }
        }
    }
})
