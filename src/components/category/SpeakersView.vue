<template>
  <div class="products">
    <product-card
      v-for="speaker in speakers"
      :key="speaker.id"
      :product="speaker"
    ></product-card>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import { useStore } from 'vuex';

const store = useStore();
const speakers = store.getters.getSpeakers;
</script>

<style scoped>
.products {
  padding: var(--category-view-padding);
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
