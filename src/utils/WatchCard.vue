<script setup lang="ts">
// import { ref } from 'vue';

// const props = defineProps({
//     proudtct: {
//         type: Object,
//         required: true
//     }
// })

</script>

<template>
    <!-- <div class="product-card">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <h3 class="product-name">{{ product.name }}</h3>
  
      <div class="product-actions">
        <button class="action-btn"><i class="fas fa-heart"></i></button>
        <button class="action-btn"><i class="fas fa-eye"></i></button>
        <button class="action-btn"><i class="fas fa-sync-alt"></i></button>
      </div>
  
      <label for="color" class="color-label">Color:</label>
      <select id="color" v-model="selectedColor" class="color-select">
        <option v-for="color in product.colors" :key="color" :value="color">{{ color }}</option>
      </select>
  
      <div class="product-pricing">
        <span class="price">{{ product.price }} USD</span>
        <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} USD</span>
      </div>
  
      <button class="add-to-cart" :disabled="product.isSoldOut">
        {{ product.isSoldOut ? "Sold Out" : "Add to Cart" }}
      </button>
    </div> -->
  </template>
  
 
  
  <style scoped lang="scss">
  .product-card {
    width: 220px;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
    position: relative;
    transition: box-shadow 0.3s ease;
  
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  
    .product-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  
    .product-name {
      font-size: 1.1em;
      font-weight: bold;
      margin: 8px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  
    .product-actions {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
  
      .action-btn {
        background: #fff;
        border: none;
        padding: 4px;
        margin: 2px 0;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;
  
        &:hover {
          background-color: #f0f0f0;
        }
  
        i {
          font-size: 0.9em;
        }
      }
    }
  
    .color-label {
      font-size: 0.9em;
      margin-top: 10px;
    }
  
    .color-select {
      width: 100%;
      padding: 6px;
      margin-top: 4px;
      font-size: 0.9em;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  
    .product-pricing {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 12px 0;
  
      .price {
        font-size: 1em;
        font-weight: bold;
        color: #333;
      }
  
      .old-price {
        font-size: 0.9em;
        color: #888;
        text-decoration: line-through;
        margin-left: 8px;
      }
    }
  
    .add-to-cart {
      width: 100%;
      padding: 8px;
      font-size: 1em;
      font-weight: bold;
      color: #fff;
      background-color: #333;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
  
      &:not(:disabled):hover {
        background-color: #555;
      }
    }
  }
  </style>
  