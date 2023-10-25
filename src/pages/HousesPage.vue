<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12">
                <h1>
                    <span>Houses Page!</span>
                </h1>
            </div>
        </section>
        <section class="row">
            <div v-for="house in houses" :key="house.id" class="col-md-6 p-3">
                <HouseCardComponent :houseProp="house" />
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js'
import HouseCardComponent from '../components/HouseCardComponent.vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses)
        };
    },
    components: { HouseCardComponent }
}
</script>


<style lang="scss" scoped></style>