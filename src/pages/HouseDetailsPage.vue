<template>
    <h1>Hey there</h1>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        const route = useRoute();
        // const router = useRouter();

        async function getHouseById() {
            try {
                const houseId = route.params.houseId
                await housesService.getHouseById(houseId);
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
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


<style lang="scss" scoped></style>