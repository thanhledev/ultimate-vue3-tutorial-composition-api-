<script setup>
import {RouterLink} from "vue-router";

const {quizQuestionLength, numberOfCorrectAnswers} = defineProps(
    ["quizQuestionLength", "numberOfCorrectAnswers"]
)
</script>

<template>
  <div class="results">
    <p>Your results...</p>
    <h1>
      {{numberOfCorrectAnswers}}/{{quizQuestionLength}}
    </h1>
    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}
.results p {
  font-size: 25px;
}
.results h1 {
  font-size:80px;
}
</style>