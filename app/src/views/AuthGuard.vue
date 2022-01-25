<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';

const router = useRouter();

const handleAuthSuccess = () => {
    router.push('/') // Go-to '/' page
}
</script>

<template>
    <LoginForm @onAuthSuccess="handleAuthSuccess" />
</template>

<style scoped>
</style>