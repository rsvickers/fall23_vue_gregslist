<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: houseProp.id } }">

        <section class="row rounded coolBg shadow">
            <div class="col-md-8">
                <h2>${{ houseProp.price }}</h2>
                <h2>{{ houseProp.bedrooms }} bed {{ houseProp.bathrooms }} bath</h2>
            </div>
            <div class="col-md-4">
                <img class="img-fluid" :src="houseProp.imgUrl" :alt="houseProp.year">
            </div>
        </section>
    </router-link>
</template>


<script>
import { House } from '../models/House.js';

export default {

    props: {
        houseProp: { type: House, required: true },
    },

    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
img {
    height: 29vh;
    widows: 100%;
    object-fit: cover;
    object-position: center;
}

.coolBg {
    background-color: rgba(162, 162, 162, 0.332);
}
</style>