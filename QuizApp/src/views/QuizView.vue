<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import QuestionCard from "../components/QuestionCard.vue";
import {useRoute} from "vue-router";
import {ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswer = ref(0);
/*
const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

watch(currentQuestionIndex.value, () => {
  questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
})
 */

const questionStatus = computed(() => {
  return `${(currentQuestionIndex.value + 1)}/${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  return `${(currentQuestionIndex.value + 1)/quiz.questions.length * 100}%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswer.value++;
  }
  currentQuestionIndex.value++;
}

</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div>
      <QuestionCard :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"/>
    </div>
  </div>
</template>

<style scoped>

</style>