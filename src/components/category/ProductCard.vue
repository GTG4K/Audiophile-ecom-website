<template>
  <div class="product-card" :class="cardDirection">
    <img :src="product.product.image.desktop" :alt="product.product.name" />
    <div class="product">
      <div class="title">
        <h2 class="tag-line" v-if="product.product.new === true">NEW PRODUCT</h2>
        <h2>{{ product.product.name }}</h2>
      </div>
      <p>{{ product.product.description }}</p>
      <base-button theme="main" :redirect="`/product/${product.product.slug}`">
        SEE PRODUCT
      </base-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const product = defineProps(['product']);

const cardDirection = computed(() => {
  return { invert: product.product.itemOrder % 2 === 1 };
});
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}
.product-card {
  display: flex;
  gap: 2rem;
}
.product-card.invert {
  flex-direction: row-reverse;
}
.product-card > * {
  flex: 1 1 0px;
  width: 0;
}
img {
  display: block;
  border-radius: 8px;
  background: var(--color-white-200);
}
h2 {
  font-size: 40px;
}
p {
  color: var(--color-white-500);
  line-height: 1.8;
}
.title {
  display: flex;
  flex-direction: column;
  grid-template: 1.4rem;
}
.tag-line {
  font-size: 16px;
  letter-spacing: 8px;
  font-weight: 400;
  color: var(--color-main-100);
}

@media only screen and (max-width: 750px) {
  .product-card {
    flex-direction: column;
    align-items: center;
  }
  .product-card.invert {
    flex-direction: column;
  }
  .product-card > * {
    width: 100%;
    object-fit: contain;
  }
  .product {
    align-items: center;
    text-align: center;
    width: 80%;
  }
  img {
    height: 350px;
  }
}

@media only screen and (max-width: 650px) {
  img {
    height: 250px;
  }
  .product {
    gap: 1rem;
  }
  .product-card {
    gap: 0.5rem;
  }
  h2 {
    font-size: 30px;
  }
  p {
    color: var(--color-white-500);
    line-height: 1.4;
    font-size: 15px;
  }
}
</style>
