<template>
  <main>
    <filters-component></filters-component>
    <products-preview></products-preview>
    <the-description></the-description>
  </main>
</template>

<script setup>
import ProductsPreview from '../components/ui/products/ProductsPreview.vue';
</script>

<style scoped>
main {
  padding: var(--content-padding);
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
