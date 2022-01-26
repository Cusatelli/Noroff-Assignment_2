<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function restart() {
    router.push('/game');
}

function exit() {
    router.push('/');
}
</script>

<template>
    <div class="container results">
        <img alt="Trivia Logo" src="../assets/logo.png" class="logo" />
        <div class="buttons">
            <button class="restart" @click="restart">Restart</button>
            <button class="exit" @click="exit">Exit</button>
        </div>
    </div>
</template>

<style scoped>
</style>
