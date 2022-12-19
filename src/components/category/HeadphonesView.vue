<template>
  <div class="products">
    <product-card
      v-for="headphone in headphones"
      :key="headphone.id"
      :product="headphone"
    ></product-card>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import { useStore } from 'vuex';

const store = useStore();
const headphones = store.getters.getHeadphones;
</script>

<style scoped>
.products {
  padding: 4rem 0 7rem 0;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
</style>
