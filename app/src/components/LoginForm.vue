<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['onAuthSuccess'])

const username = ref('')
const displayError = ref('')

/**
 * click event for user to login, it takes only username as input,
 * func uses error handler for onAutherized user
 * @param {String} action 
 */
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
    <div class="container form">
        <h2>Login</h2>
        <form>
            <fieldset>
                <label for="username" area-label="Username">Username</label>
                <input type="text" id="username" placeholder="John Doe" v-model="username" />
            </fieldset>
            <button @click="onLoginClick('login')" type="button" class="login">Login</button>
        </form>
        <div v-if="displayError" class="error">
            <span class="message">Error</span>
            <p>{{ displayError }}</p>
        </div>
    </div>
</template>
