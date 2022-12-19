<template>
  <div class="product">
    <p>NEW PRODUCT</p>
    <h2>{{ productTitle }}</h2>
    <h3>{{ productDescription }}</h3>
    <base-button theme="main" :redirect="`/product/${product.slug}`">
      SEE PRODUCT
    </base-button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
// import { ref, reactive, computed } from 'vue';
const store = useStore();
const product = store.getters.getHomeProduct;

const productTitle = computed(() => {
  return product.name.toUpperCase();
});

const productDescription = computed(() => {
  return product.description;
});
</script>

<style scoped>
.product {
  padding: 3rem 0;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
p {
  color: var(--color-white-500);
  letter-spacing: 10px;
  font-weight: 300;
  font-size: 14px;
}
h2 {
  color: var(--color-white-100);
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 50px;
  line-height: 1;
}
h3 {
  color: var(--color-white-400);
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 2px;
}
</style>
