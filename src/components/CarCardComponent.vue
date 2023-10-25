<template>
  <router-link @click="setActiveCar(carProp)" :to="{ name: 'CarDetails', params: { carId: carProp.id } }">
    <section class="row rounded bg-light shadow">
      <div class="col-md-4 p-0">
        <img class="img-fluid rounded-start" :src="carProp.imgUrl" :alt="carProp.make + ' ' + carProp.model">
      </div>
      <div class="col-md-8 p-5">
        <h2>{{ carProp.make }} {{ carProp.model }}</h2>
        <h3>${{ carProp.price }}</h3>
      </div>
    </section>
  </router-link>
</template>


<script>
import { AppState } from '../AppState.js';
import { Car } from '../models/Car.js';


export default {
  props: {
    carProp: { type: Car },
  },
  setup() {
    return {
      setActiveCar(car) {
        AppState.activeCar = car
      }
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 30vh;
  width: 100%;
  object-fit: cover;
}
</style>