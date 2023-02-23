<script setup>
import {useRoute} from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const car = cars.find(c => c.id === parseInt(route.params.id))
</script>


<template>
  <div v-if="car">
    <h1>Contact Info</h1>
    <p>Dealer: {{car.contact.dealer}}</p>
    <p>Mobile/Fax: {{car.contact.number}}</p>
  </div>
  <div v-else>
    <h1>Contact not found</h1>
  </div>
</template>

<style scoped>

</style>