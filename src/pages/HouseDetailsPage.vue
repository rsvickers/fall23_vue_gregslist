<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12">
                <h1>House Details</h1>
            </div>
        </section>
        <section if="house" class="row bg-light rounded shadow">
            <div class="col-md-5">
                <img class="img-fluid" :src="house.imgUrl" :alt="house.creator.name">
            </div>
            <div class="col-md-7">
                <img class="creator" :src="house.creator.picture" :alt="house.creator.name">
                <h3>{{ house.bedrooms }} bed {{ house.bathrooms }} bath. For ${{ house.price }} </h3>
                <h4>Listed by {{ house.creator.name }} on {{ house.createdAt.toLocaleString() }}</h4>
            </div>
        </section>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
// import { logger } from '../utils/Logger.js';

export default {
    setup() {
        const route = useRoute();
        // const router = useRouter();

        async function getHouseById() {
            try {
                const houseId = route.params.houseId;
                await housesService.getHouseById(houseId);
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            // logger.log('House Id from route', route.params.houseId)
            housesService.clearData();
            getHouseById()
        })

        return {
            house: computed(() => AppState.activeHouse),
            account: computed(() => AppState.account)
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