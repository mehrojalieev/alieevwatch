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


@media only screen and (max-width: 1078px) {
    .best__products-cards{
        grid-template-columns: repeat(3, 1fr);
    }

    .best__products-header {
    .header-title {
        @include f-style(37px, 500, var(--dark-color));
    }
    .header-description {
        @include f-style(14px, 400, rgb(131, 131, 131));
        max-width: 420px;
        line-height: 18px;
    }
    .show-link {
        @include f-style(14px, 500, #838383);
        padding: 12px 40px;

        &:hover {
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);  ;
            color: var(--light-color);
        }
    }
}
}


@media only screen and (max-width: 864px) {
  .best__products-cards{
        grid-template-columns: repeat(3, 1fr);
    }
    .best__products-header {
    .header-title {
        @include f-style(34px, 500, var(--dark-color));
    }
    .header-description {
     display: none;
    }
    .show-link {
        @include f-style(14px, 500, #838383);
        padding: 12px 30px;

        &:hover {
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);  ;
            color: var(--light-color);
        }
    }
}
}


@media only screen and (max-width: 730px){
    .best__products-cards{
      grid-template-columns: repeat(2, 1fr);
      gap: 1.3rem 1rem;
    }
}

@media only screen and (max-width: 482px){
    .best__products-cards{  
      grid-template-columns: repeat(1, 1fr);
      gap: 1.3rem 1rem;
    }
}

@media only screen and (max-width: 415px){
  .best__products-header {
    .header-title {
        @include f-style(24px, 500, var(--dark-color));
    }
    .show-link {
        @include f-style(13px, 500, #838383);
        padding: 8px 28px;
    }
}
}

@media only screen and (max-width: 350px){
    .best__products-header {
      flex-direction: column;
      align-items: start;
      row-gap: 1rem;
      .header-title {
        @include f-style(26px, 500, var(--dark-color));
    }
    .show-link {
        @include f-style(14px, 500, #838383);
        padding: 8px 30px;
    }
    }
}

</style>