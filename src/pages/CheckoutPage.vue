<template>
  <main>
    <checkout-component></checkout-component>
    <checkout-summary></checkout-summary>
  </main>
</template>

<script setup>
import CheckoutComponent from '../components/ui/checkout/CheckoutComponent.vue';
import CheckoutSummary from '../components/ui/checkout/CheckoutSummary.vue';
</script>

<style scoped>
main {
  padding: var(--content-padding);
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 2rem;
}
@media only screen and (max-width: 1000px) {
  main {
    grid-template-columns: 1fr;
  }
}
</style>
