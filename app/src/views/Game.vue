<script>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue'
import { apiGenerateURL } from '../api/apiURL';

export default {
	setup() {
		const store = useStore();
		const questions = ref([]);
		const answers = ref([]);
		const question = ref("");
		let index = 0;

		onMounted(async () => {
			console.log("Mounted")
			const options = JSON.parse(localStorage.getItem('options'));

			await fetch(apiGenerateURL(options))
				.then(response => response.json())
				.then(results => {
					// results will be an array of users that match the username of mega-mind.
					questions.value = results.results;
					localStorage.setItem('questions', questions.value)
					question.value = questions.value[0].question;
					answers.value = questions.value[0].incorrect_answers
					answers.value.push(questions.value[0].correct_answer);
				});
		})

		function nextQuestion() {
			console.log("next")
			const quest = questions.value[++index];
			if(quest) {
				question.value = quest.question;
			} else {
				// Go to results screen
				return question.value;
			}
		}

		return {
			questions,
			answers,
			question,
			nextQuestion
		}
	}
}
</script>

<template>
	<div class="container game" onload="fetchAPIQuestions">
		<h2>{{ question }}</h2>
		<ul class="questions">
			<li	v-for="(answer, index) in answers"
				:key="index"
				:value="answer" class="button" @click="nextQuestion">
				{{ answer }}
			</li>
		</ul>
		<button class="next" @click="nextQuestion">Skip</button>
	</div>
</template>
