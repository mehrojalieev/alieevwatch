<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Articles from '../components/Articles.vue';
// import BestProducts from '../components/BestProducts.vue';
import Hero from '../components/Hero.vue';
import SubscribeUs from '../components/SubscribeUs.vue';
import Loading from '../components/Loading.vue';

const About = defineAsyncComponent({
    loader: () => import('../views/About.vue'),
    loadingComponent: Loading,
    delay: 2000,
}

)

</script>

<template>
    <Hero/>
    <Suspense>
        <template #default>
                <About/>
        </template>
        <template #fallback>
            <Loading/>
        </template>
    </Suspense>
    <SubscribeUs/> 
    <Articles/>
    <!-- <BestProducts/>  -->
</template>