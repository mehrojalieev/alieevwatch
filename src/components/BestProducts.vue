<script setup lang="ts">
import { RouterLink } from 'vue-router';
import WatchCard from '../utils/WatchCard.vue';

</script>

<template>
  <section class="best-products">
      <div class="best__products-wrapper container">
          <header class="best__products-header">
            <h3 class="header-title">Best Products</h3>
            <p class="header-description">If you are looking to buy a new watch, there are a few things you should keep in mind. First, consider your budget. Watches can range in price from a few dollars to several thousand dollars.</p>
            <RouterLink to="/" class="show-link"> Show Nore </RouterLink>

          </header>
          <div class="best__products-cards">
            <WatchCard v-for="i in 4" :key="i"/>
          </div>
        </div>
  </section>
</template>


<style scoped lang="scss">
@mixin f-style($size, $weight, $color) {
    font-size: $size;
    font-weight: $weight;
    color: $color;
}


  .best-products{
    padding: 70px 0;
    width: 100%;
    background-color: var(--light-color);
  }

  .best__products-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-title {
        @include f-style(41px, 500, var(--dark-color));
    }
    .header-description {
        @include f-style(14px, 400, rgb(131, 131, 131));
        max-width: 450px;
        line-height: 20px;
    }
    .show-link {
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        @include f-style(14px, 500, #838383);
        border: 1px solid #838383;
        padding: 12px 47px;

        &:hover {
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);  ;
            color: var(--light-color);
        }
    }
}

.best__products-cards{
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  justify-items: center;
}
</style>