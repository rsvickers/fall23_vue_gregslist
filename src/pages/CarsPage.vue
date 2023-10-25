<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>
          <span>This is the cars page!</span>
          <button class="btn fs-2 ms-3" type="button" title="Open Car Form" data-bs-toggle="modal"
            data-bs-target="#carFormModal">
            🚗
          </button>
        </h1>
      </div>
    </section>
    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-6 p-4">
        <CarCardComponent :carProp="car" />
      </div>
    </section>
  </div>

  <CarFormModalComponent />
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'
import { AppState } from '../AppState.js'
import CarFormModalComponent from '../components/CarFormModalComponent.vue';
import CarCardComponent from '../components/CarCardComponent.vue';

export default {
  // NOTE no props on pages
  setup() {
    async function getCars() {
      try {
        await carsService.getCars();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getCars();
    });
    return {
      cars: computed(() => AppState.cars)
    };
  },
  components: { CarFormModalComponent, CarCardComponent }
}
</script>


<style lang="scss" scoped></style>