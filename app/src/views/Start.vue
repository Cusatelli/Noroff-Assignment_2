<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToLogin() {
    console.log("Go to login");
    router.push('/login');
}
</script>

<template>
    <div class="start-container">
        <img alt="Trivia Logo" src="../assets/logo.png" class="app-logo" />
        <button class="start-button" @click="goToLogin">Start</button>
    </div>
</template>

<style scoped>
</style>
