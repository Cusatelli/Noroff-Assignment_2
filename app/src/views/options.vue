<script setup>

function onPlay() {
    console.log("Go to game");
    router.push('/game');
}
</script>

<template>
<div class="option-container">
    <h1>options</h1>
        <form>
    
    <fieldset>
        <label for="difficulty">Difficulty</label>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            <span>Selected: {{ selected }}</span>
    </fieldset>

    <fieldset>
        <label for="category">Category</label>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>FRuits</option>
                <option>Vegetable</option>
                <option>Cats</option>
            </select>
            <span>Selected: {{ selected }}</span>
    </fieldset>

    <fieldset>
        <label for="numberOfQuestions">Number of questions</label>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
            </select>
            <span>Selected: {{ selected }}</span>
    </fieldset>

    <div>
        <button type="button" class="start-button" @click="onPlay">Play</button>
    </div>
    
</form>
</div>
</template>

<style scoped>
</style>