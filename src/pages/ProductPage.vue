<template>
  <main>
    <product-component></product-component>
    <filters-component></filters-component>
    <the-description></the-description>
  </main>
</template>

<script setup>
import ProductComponent from '../components/ui/products/ProductComponent.vue';
</script>

<style scoped>
main {
  padding: var(--content-padding);
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
</style>
