<script setup lang="ts">
import { ref } from 'vue';
import ProductDetails from './ProductDetails.vue';

// import { ref } from 'vue';

// const props = defineProps({
//     proudtct: {
//         type: Object,
//         required: true
//     }
// })

const showDetailModal = ref<boolean>(false);

const toggleModal = () => {
  showDetailModal.value = !showDetailModal.value;
};

const product: any  = {
  name: "Cushion QUartz"
}

</script>

<template>
    <div class="product-card">
      <h3 class="product-name">Cushion QUartz</h3>
      <div class="card-actions">
        <button><i class="pi pi-heart"></i></button>
        <button @click="toggleModal"><i class="pi pi-eye"></i></button>
      </div>
      <img src="https://wristwatch-workdo.myshopify.com/cdn/shop/products/marc-jacobs-the-cushion-quartz-black-dial-ladies-watch-mj0120179301-removebg-preview_258x258.png?v=1678166425" class="product-image" />
      
      <label for="color" class="color-label">Color:</label>
      <select id="color"  class="color-select">
        <option  >red</option>
      </select>
      
      <div class="price-actions">
        <div class="price-item">
          <strong>25.00 <sup>USD</sup></strong>
        </div>
        <button class="add-btn">Add To Cart</button>
      </div>
    </div>
    <ProductDetails v-if="showDetailModal" @close="toggleModal" :products="product"/>
  </template>
  
 
  
  <style scoped lang="scss">
  @mixin f-style($size, $weight, $color) {
    font-size: $size;
    font-weight: $weight;
    color: $color;
}
  .product-card {
    position: relative;
    width: 100%;
    max-width: 300px;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    background: linear-gradient(148deg, #4c028236, #0000);;
    position: relative;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 1px solid #452652;
  
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  
    .product-image {
      width: 100%;
      max-width: 250px;
      height: 190px;
      object-fit: contain;
      margin-top: 1.4rem;
      border-radius: 8px;
    }
  
    .product-name {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      @include f-style(20px, 600, var(--dark-color));
    }
  

  
    .color-label {
      font-size: 0.9em;
      margin-top: 14px !important;
    }
  
    .color-select {
      width: 100%;
      padding: 0 13px;
      margin-top: 14px;
      height: 36px;
      border-radius: 4px;
      border: 1px solid #ccc;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
      background: transparent;
      outline: none;
      border: 1px solid #452652bd;
      @include f-style(14px, 400, rgb(131, 131, 131))
    }
  
   .price-actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .price-item{
      strong{
        @include f-style(16px, 600, var(--dark-color));
        sup{
          @include f-style(10px, 600, var(--dark-color));
        }
      }
    }
    .add-btn{
      padding: 7px 30px;
      @include f-style(14px, 400, var(--light-color));
      border: 1px solid #838383;
      -webkit-border-radius: 0px 10px 0px 10px;
      background-color: var(--dark-color);
      opacity: .9;
      &:hover {
        background: linear-gradient(75deg, #6400b2 0%, #000000 100%);
        ;
        color: var(--light-color);
      }
    }
   }
  }

  .card-actions{
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    position: absolute;
    top: 15%;
    right: 10px;
    button{
      background-color: var(--light-color);
      border: none;
      cursor: pointer;
      padding: 2px;
      
      i{
     @include f-style(17px, 500,  var(--dark-color));
      }
    }
  }

  @media only screen and (max-width: 1078px) {
    .product-card {
      max-width: 100%;
      &:last-child {
        display: none;
      }
    }
  }
  
  @media only screen and (max-width: 810px) {
    .product-card{
      .price-actions{
        .add-btn{
          padding: 7px 18px; 
      @include f-style(13px, 400, var(--light-color));
        }
        }
    }
  }

  @media only screen and (max-width: 730px) {
    .product-card {
      text-align: center;
    padding: 12px 16px;
    &:last-child {
        display: block;
      }
    .product-image {
      max-width: 230px;
      height: 230px;
      margin-top: 1.4rem;
    }
  
    .product-name {
      @include f-style(20px, 600, var(--dark-color));
    }

    .color-label {
      font-size: 0.9em;
      margin-top: 14px !important;
    }
  
    .color-select {
      padding: 0 13px;
      margin-top: 14px;
      height: 36px;
      @include f-style(14px, 400, rgb(131, 131, 131))
    }
  
   .price-actions{
    margin-top: 20px;
    .price-item{
      strong{
        @include f-style(16px, 600, var(--dark-color));
        sup{
          @include f-style(10px, 600, var(--dark-color));
        }
      }
    }
    .add-btn{
      @include f-style(14px, 400, var(--light-color));
    }
   }
  }
  }

  @media only screen and (max-width: 584px) {
    .product-card {
      .product-image {
      height: 200px;
      margin-top: 1.4rem;
    }
    }
  }
  @media only screen and (max-width: 518px) {
    .product-card {
      .product-image {
      height: 180px;
      margin-top: 1.4rem;
    }
    .price-actions{
    margin-top: 20px;
    .price-item{
      strong{
        @include f-style(14px, 600, var(--dark-color));
        sup{
          @include f-style(10px, 500, var(--dark-color));
        }
      }
    }
    .add-btn{
      @include f-style(13px, 400, var(--light-color));
    }
   }
    }
  }

  @media only screen and (max-width: 482px) {
    .product-card {
      &:last-child, &:nth-last-child(2) {
        display: none;
      }
      .product-image {
      height: 250px;
      margin-top: 1.4rem;
    }
    .price-actions{
    margin-top: 20px;
    .price-item{
      strong{
        @include f-style(15px, 600, var(--dark-color));
        sup{
          @include f-style(12px, 500, var(--dark-color));
        }
      }
    }
    .add-btn{
      @include f-style(15px, 400, var(--light-color));
      padding: 7px 25px;
    }
   }
    }
  }
  </style>
  