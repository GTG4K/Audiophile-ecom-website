<template>
  <div class="preview-xz9">
    <img :src="img" alt="" />
    <div class="product-details">
      <h2>{{ props.product.name }}</h2>
      <p>{{ props.product.description }}</p>
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
    return '/assets/home/desktop/image-speaker-zx9.png';
  } else if (props.size === 'tablet') {
    return '/assets/home/tablet/image-speaker-zx9.png';
  } else {
    return '/assets/home/mobile/image-speaker-zx9.png';
  }
});
</script>

<style scoped>
.preview-xz9 {
  background: var(--color-main-100);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  height: 550px;
  border-radius: 8px;
  align-items: center;
}
.product-details {
  width: 410px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  margin: 0 10% 0 0;
}
img {
  width: 400px;
  position: absolute;
  object-fit: contain;
  top: 80px;
  left: 10%;
}
h2 {
  font-size: 65px;
  font-weight: 500;
  letter-spacing: 3px;
  line-height: 1.1;
  color: var(--color-white-100);
}
p {
  font-size: 15px;
  letter-spacing: 1px;
  color: var(--color-white-300);
}

@media only screen and (max-width: 1150px) {
  .preview-xz9 {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    gap: 2rem;
    height: auto;
  }
  .product-details {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: auto;
    max-width: 550px;
    margin: 0;
  }
  img {
    width: 200px;
    position: static;
    object-fit: contain;
  }
  h2 {
    font-size: 45px;
  }
}
</style>
