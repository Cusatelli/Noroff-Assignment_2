<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['onAuthSuccess'])

const username = ref('')
const displayError = ref('')

const onLoginClick = async (action) => {
    const error = await store.dispatch('loginUser', {
        action,
        username
    })

    if (error !== null) {
        displayError.value = error
    } else {
        emit('onAuthSuccess')
    }
}
</script>

<template>
    <div class="login-form-container">
        <h1 class="login-title">Login</h1>
        <form>
            <fieldset>
                <label for="username" area-label="Username">Username</label>
                <input type="text" id="username" placeholder="John Doe" v-model="username" />
            </fieldset>
            <button @click="onLoginClick('login')" type="button" class="login-button">Login</button>
        </form>
        <div v-if="displayError" class="error-container">
            <span class="error-message">Error</span>
            <p>{{ displayError }}</p>
        </div>
    </div>
</template>
