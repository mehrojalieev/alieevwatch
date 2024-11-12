<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});
</script>


<template>
    <div v-if="isLoading" class="loading-wrapper">
        <div class="spinner"></div>
        <p>Loading...</p>
    </div>
    <div v-else>
        <p>Your main content goes here.</p>
    </div>
</template>

<style lang="scss" scoped>
.loading-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #555;
    font-size: 18px;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s ease-in-out infinite;
    margin-bottom: 16px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
