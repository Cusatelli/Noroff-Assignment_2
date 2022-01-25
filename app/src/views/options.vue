<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const store = useStore();

const router = useRouter();
const categories = ref([]);
fetch("https://opentdb.com/api_category.php")
    .then(response => response.json())
    .then(data => data.trivia_categories).then((newCategories) => { categories.value = newCategories });

const difficulty = ref('');
const category = ref('');
const numberOfQuestions = ref('');

//change to api
const difficulties = [{ id: 1, name: "Easy" }, { id: 2, name: "Medium" }, { id: 3, name: "Hard" }];

function onPlay() {
    store.dispatch("inputOptions", { difficulty, category, numberOfQuestions }).then(() => {
        console.log("Go to game");
        router.push('/game');
    })
}
</script>

<template>
    <div class="container options">
        <h2>Options</h2>
        <form>
            <fieldset>
                <label for="difficulty">Difficulty</label>
                <select v-model="difficulty">
                    <option disabled value>Please select one</option>
                    <option
                        v-for="(diff, index) in difficulties"
                        :key="index"
                        :value="diff.id"
                    >{{ diff.name }}</option>
                </select>
            </fieldset>

            <fieldset>
                <label for="category">Category</label>
                <select v-model="category">
                    <option disabled value>Please select one</option>
                    <option
                        v-for="(cat, index) in categories"
                        :key="index"
                        :value="cat.id"
                    >{{ cat.name }}</option>
                </select>
            </fieldset>

            <fieldset>
                <label for="numberOfQuestions">Number of questions</label>
                <input
                    type="number"
                    id="num"
                    name="numberOfQuestions"
                    min="1"
                    max="100"
                    v-model="numberOfQuestions"
                />
            </fieldset>

            <div>
                <button type="button" class="play" @click="onPlay">Play</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
</style>