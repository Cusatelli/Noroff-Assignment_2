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
const highscore = ref("");
    
function restart() {
    router.push('/game');
}

function exit() {
    router.push('/');
}

onMounted(() => {
    results.value = store.state.results;
    questions.value = results.value.questions;
    correctAnswers.value = results.value.correctAnswers;
    answers.value = results.value.answers;
    highscore.value = results.value.results;
})

</script>

<template>
    <!-- <div class="container results"> -->
    <div class="container start">
        <h2>Highscore: {{ highscore }}P</h2>
        <ul v-for="(question, index) in questions"
            :key="index"    
            :value="question"
        >
            <li>
                <h2>{{ question }}</h2>
                <div class="answer selected">
                    <p class="label">Selected Answer</p>
                    <p>{{ answers[index] }}</p>
                </div>
                <div class="answer correct">
                    <p class="label">Correct Answer</p>
                    <p>{{ correctAnswers[index] }}</p>
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
