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
const type = ref('');
const numberOfQuestions = ref('');

//change to api
const difficulties = [{ id: 1, name: "easy" }, { id: 2, name: "medium" }, { id: 3, name: "hard" }];
const types = [{ id: 1, name: "multiple choice" }, { id: 2, name: "true / false" }];

function onPlay() {
    const options = {
        difficulty: difficulty.value,// !== "" ? difficulty.value : "easy",
        category: category.value,
        type: type.value,
        numberOfQuestions: numberOfQuestions.value
    };
    store.dispatch("inputOptions", options)
        .then(() => {
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
                        :value="diff.name"
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
                <label for="type">Type</label>
                <select v-model="type">
                    <option disabled value>Please select one</option>
                    <option
                        v-for="(type, index) in types"
                        :key="index"
                        :value="type.name"
                    >{{ type.name }}</option>
                </select>
            </fieldset>

            <fieldset>
                <label for="numberOfQuestions">Number of questions</label>
                <input
                    type="number"
                    id="num"
                    name="numberOfQuestions"
                    min="1"
                    max="10"
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