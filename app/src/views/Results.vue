<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const results = ref([]);
const questions = ref([]);
const correctAnswers = ref([]);
const answers = ref([]);
const score = ref("");
const highscore = ref("");
const correct = ref("");
    
function restart() {
    router.push('/game');
}

function exit() {
    router.push('/');
}

onMounted(async () => {
    results.value = store.state.results;
    questions.value = results.value.questions;
    correctAnswers.value = results.value.correctAnswers;
    answers.value = results.value.answers;
    score.value = results.value.results;
    highscore.value = store.state.user[0].highScore;

    // Check highscore from API
    if(store.state.user) {
        // Example
        // user: Array[1]
        //     0: Object
        //         highscore: 0
        //         id: 16
        //         username: "machinist"

        // Check highscore if it is higher.
        if(highscore.value < score.value) {
            highscore.value = score.value;
            const error = store.dispatch('updateUserInfo', {
                userID: store.state.user[0].id,
                highScore: score.value
            });
        }
    }
})
</script>

<template>
    <div class="container results">
        <h2>Score: {{ score }}P</h2>
        <p>Highscore: {{ highscore }}P</p>
		<ul class="questions">
            <li v-for="(question, index) in questions"
                :key="index"    
                :value="question">
                <h2 class="question">{{ question }}</h2>
                <div class="answer">
                    <p class="label">Selected</p>
                    <!-- Hide from view -->
                    <span style="display: none">{{ correct = answers[index] === correctAnswers[index] }}</span>
                    <!-- Show in view -->
                    <p v-if="correct" class="correct">{{ answers[index] }}</p>
                    <p v-if="!correct" class="incorrect">{{ answers[index] }}</p>
                </div>
                <div class="answer">
                    <p class="label">Correct</p>
                    <p class="correct">{{ correctAnswers[index] }}</p>
                </div>
            </li>
        </ul>
        <div class="buttons">
            <button class="restart" @click="restart">Restart</button>
            <button class="exit" @click="exit">Exit</button>
        </div>
    </div>
</template>

<style scoped>
</style>
