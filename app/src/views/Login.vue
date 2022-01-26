<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';

const router = useRouter();

/**
 * Go-to '/options' page
 */
const handleAuthSuccess = () => {
    router.push('/options')
}
</script>

<template>
    <LoginForm @onAuthSuccess="handleAuthSuccess" />
</template>

<style scoped>
</style>