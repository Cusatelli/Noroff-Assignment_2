<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

/**
 * Onclick function takes user to login page
 */
function goToLogin() {
    console.log('Go to login')
    router.push('/login')
}
</script>

<template>
    <div class="container start">
        <img alt="Trivia Logo" src="../assets/logo.png" class="logo" />
        <button class="start" @click="goToLogin">Start</button>
    </div>
</template>

<style scoped>
</style>
