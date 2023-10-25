<template>
  <h1>Car Details</h1>
  <!-- <div>{{ car.make }} {{ car.model }}</div> -->
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>


<style lang="scss" scoped></style>