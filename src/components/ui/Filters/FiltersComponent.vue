<template>
  <div class="categories">
    <filter-card
      v-for="category in categories"
      :key="category.name"
      :category="category"
    ></filter-card>
  </div>
</template>

<script setup>
import FilterCard from './FilterCard.vue';
import { reactive } from 'vue';

const categories = reactive([
  {
    name: 'headphones',
    image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    name: 'speakers',
    image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
  },
  {
    name: 'earphones',
    image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
  },
]);
</script>

<style scoped>
.categories {
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>
