<script setup lang="ts">
        const props = defineProps({
            products: {
                type: Object,
                required: true
            }
        })


        const emit = defineEmits(['close'])

</script>


<template>
    <div v-if="props.products" class="product__detail-overlay" @click="emit('close')">
        <div class="product-detail-modal" @click.stop>
                <div class="detail-contents"></div>
                <div class="detail-images"></div>
  </div>
    </div>
</template>



<style scoped lang="scss">
    .product__detail-overlay{
        width: 100%;
  height: 100%;
  z-index: 100 !important;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
    }
    .product-detail-modal {
  background-color: #6400B2;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
</style>