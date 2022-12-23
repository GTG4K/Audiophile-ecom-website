<template>
  <div class="preview-yx1">
    <img :src="img" alt="" />
    <div class="product-details">
      <h2>{{ props.product.name }}</h2>
      <base-button theme="dark" :redirect="`/product/${props.product.slug}`">
        SEE PRODUCT
      </base-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['product', 'size']);

const img = computed(() => {
  if (props.size === 'desktop') {
    return '/assets/home/desktop/image-earphones-yx1.jpg';
  } else if (props.size === 'tablet') {
    return '/assets/home/tablet/image-earphones-yx1.jpg';
  } else {
    return '/assets/home/mobile/image-earphones-yx1.jpg';
  }
});
</script>

<style scoped>
.preview-yx1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.product-details {
  background: var(--color-white-300);
  border-radius: 8px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
img {
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
}

@media only screen and (max-width: 700px) {
  h2 {
    font-size: 25px;
  }
}
@media only screen and (max-width: 500px) {
  h2 {
    font-size: 20px;
  }
}
@media only screen and (max-width: 450px) {
  .preview-yx1 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .product-details {
    padding: 1rem 0;
  }
}
</style>
