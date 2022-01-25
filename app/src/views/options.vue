<script setup>import { reactive } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const store = useStore();

const router = useRouter();
const categories = ref([]);
fetch("https://opentdb.com/api_category.php")
    .then(response => response.json())
    .then(data => data.trivia_categories).then((newCategories) => { categories.value = newCategories });




const selected = reactive({
    difficulty: "",
    category: "",
    numOfQuestion: 1
})
//change to api
const difficulties = [{ id: 1, name: "Easy" }, { id: 2, name: "Medium" }, { id: 3, name: "Hard" }];


function onPlay() {
    const inputs = selected;
    store.dispatch("send_inputs_to_game", inputs).then(() => {
        console.log("Go to game");
        router.push('/game');
    })
}

</script>

<template>
    <div class="option-container">
        <h1>options</h1>
        <form>
            <fieldset>
                <label for="difficulty">Difficulty</label>
                <select v-model="selected.difficulty">
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
                <select v-model="selected.category">
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
                    name="numOfQuestion"
                    min="1"
                    max="100"
                    v-model="selected.numOfQuestion"
                />
            </fieldset>

            <div>
                <button type="button" class="start-button" @click="onPlay">Play</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
</style>