<script setup>
import {ref} from "vue";
import {RouterView} from "vue-router";
import MainNav from "./components/MainNav.vue";

const randomState = ref("")
</script>

<template>
  <div>
    {{randomState}}
    <button @click="randomState = 'Hello there'">Click me</button>
    <MainNav />
    <RouterView />
  </div>
</template>

