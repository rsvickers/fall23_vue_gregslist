<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>This is the cars page! 🚗</h1>
      </div>
    </section>
    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-12">
        {{ car.make }} {{ car.model }}
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'
import { AppState } from '../AppState.js'

export default {
  setup() {
    async function getCars() {
      try {
        await carsService.getCars()
      } catch (error) {
        Pop.error(error)
      }
    }


    onMounted(() => {
      getCars()
    })
    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>


<style lang="scss" scoped></style>