<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>Car Details</h1>
      </div>
    </section>
    <section v-if="car" class="row">
      <div class="col-md-5">
        <img :src="car.imgUrl" :alt="car.make + ' ' + car.model" class="img-fluid">
      </div>
      <div class="col-md-7">
        <h2>{{ car.year }} {{ car.make }} {{ car.model }}</h2>
        <img :src="car.creator.picture" :alt="car.creator.name" class="creator">
        <h3>Listed by {{ car.creator.name }} on {{ car.createdAt.toLocaleDateString() }}</h3>
        <h3>${{ car.price }}</h3>
        <h4>Engine: {{ car.engineType }}</h4>
        <p>{{ car.description }}</p>
      </div>
    </section>
    <section v-else class="row">
      <div class="col-12 p-4">
        <h2>Loading... <i class="mdi mdi-loading mdi-spin"></i></h2>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    // NOTE gives us information about our current route, and can access properties from the url
    const route = useRoute()

    async function getCarById() {
      try {
        const carId = route.params.carId
        await carsService.getCarById(carId)
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      logger.log('CAR ID FROM ROUTE', route.params.carId)
      carsService.clearData()
      getCarById()
    })
    return {
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>


<style lang="scss" scoped>
.creator {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}
</style>