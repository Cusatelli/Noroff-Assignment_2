<script>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue'
import { apiGenerateURL } from '../api/apiURL';
import { useRouter } from 'vue-router';

export default {
	setup() {
		const store = useStore();
		const router = useRouter();
		const questions = ref([]);
		const alternatives = ref([]);
		const answers = ref([]);
		const correctAnswers = ref([]);
		const question = ref("");
		let index = 0;

		onMounted(async () => {
			console.log("Mounted")
			question.value = "Loading..."
			const options = JSON.parse(localStorage.getItem('options'));

			await fetch(apiGenerateURL(options))
				.then(response => response.json())
				.then(results => {
					// results will be an array of users that match the username of mega-mind.
					questions.value = results.results;

					setQuestion(0);
				});
		})

		function setQuestion(index) {
			if (!questions.value[index].question) {
				console.error("Oops! Something went wrong, please try again.");
				router.push(options);
			}
			question.value = questions.value[index].question;
			alternatives.value = questions.value[index].incorrect_answers
			alternatives.value.push(questions.value[index].correct_answer);
			correctAnswers.value.push(questions.value[index].correct_answer);
		}

		function nextQuestion(answer) {
			console.log("next")
			if (answer) { // Always add answer
				answers.value.push(answer);
				console.log(answers.value);
			} else { // if i.e skip is pressed
				answers.value.push(null);
				console.log(answers.value);
			}

			const nextQuestion = questions.value[++index];
			if (nextQuestion) {
				setQuestion(index);
				console.log(correctAnswers.value);
			} else {
				// Compare answers and correct answers.
				// let results = 0;
				// for (let index = 0; index < correctAnswers.value.length; index++) {
				// 	const correctAnswer = correctAnswers.value[index];
				// 	const answer = answers.value[index];
				// 	if (correctAnswer === answer) {
				// 		results += 10;
				// 	}
				// }

				// Go to results screen
				// router.push('/results');
				let questionsQuestion = []
				for (let index = 0; index < questions.value.length; index++) {
					questionsQuestion.push(questions.value[index].question);
				}
				store.dispatch("gameResults", {
					questions: questionsQuestion,
					answers: answers.value,
					correctAnswers: correctAnswers.value
				}).then(() => {
					router.push('/results');
				})
				// console.log("Results " + results + " Points");
				return question.value;
			}
		}

		return {
			question,
			alternatives,
			nextQuestion
		}
	}
}
</script>

<template>
	<div class="container game">
		<h2>{{ question }}</h2>
		<ul class="questions">
			<li
				v-for="(answer, index) in alternatives"
				:key="index"
				:value="answer"
				class="button"
				@click="nextQuestion(answer)"
			>{{ answer }}</li>
		</ul>
		<button class="next" @click="nextQuestion(null)">Skip</button>
	</div>
</template>
