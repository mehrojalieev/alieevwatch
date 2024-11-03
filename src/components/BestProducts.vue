<script setup lang="ts">
import WatchCard from '../utils/WatchCard.vue';


</script>

<template >
    <section class="best-products">
        <div class="best__products-wrapper container">
            <WatchCard v-for="product in 4" :key="product"/>
        </div>

    </section>
</template>


<style scoped lang="scss">
    .best__products-wrapper{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
    }
</style>