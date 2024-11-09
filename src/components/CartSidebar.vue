<script setup lang="ts">
import Sidebar from 'primevue/sidebar';
import { ref } from 'vue';
// const props = defineProps({
//     openSidebar:{
//         type: Boolean
//     }
// })
const visibleRight = ref<boolean>(false);
</script>


<template>
     <Sidebar v-model:visible="visibleRight" header="Right Sidebar" position="right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="cart-sidebar">
                
            </div>
        </Sidebar>
</template>


<style scoped lang="scss">
    .cart-sidebar{
        max-width: 410px;
        width: 100%;
        background-color: var(--light-color);
        position: absolute;
        top: 0%;
        right: 0%;
        height: 100vh;
        z-index: 10;
    }
</style>