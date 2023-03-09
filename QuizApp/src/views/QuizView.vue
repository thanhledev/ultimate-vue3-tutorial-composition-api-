<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import QuestionCard from "../components/QuestionCard.vue";
import ResultCard from "../components/ResultCard.vue";

import {useRoute} from "vue-router";
import {ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId);
const showResults = ref(false);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
/*
const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

watch(currentQuestionIndex.value, () => {
  questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
})
 */

const questionStatus = computed(() => {
  if (currentQuestionIndex.value < quiz.questions.length)
    return `${(currentQuestionIndex.value + 1)}/${quiz.questions.length}`;
  else
    return `${quiz.questions.length}/${quiz.questions.length}`
});

const barPercentage = computed(() => {
  if (currentQuestionIndex.value < quiz.questions.length)
    return `${(currentQuestionIndex.value + 1)/quiz.questions.length * 100}%`;
  else
    return "100%";
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }
  currentQuestionIndex.value++;
}

</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div>
      <QuestionCard
          v-if="!showResults"
          :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <ResultCard
          v-else
          :quizQuestionLength="quiz.questions.length"
          :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>

<style scoped>

</style>