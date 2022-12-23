<template>
  <div class="preview-xz7">
    <div class="product-details">
      <h2>{{ props.product.name }}</h2>
      <base-button theme="dark" :redirect="`/product/${props.product.slug}`">
        SEE PRODUCT
      </base-button>
    </div>
    <img :src="img" alt="" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['product', 'size']);

const img = computed(() => {
  if (props.size === 'desktop') {
    return '/assets/home/desktop/image-speaker-zx7.jpg';
  } else if (props.size === 'tablet') {
    return '/assets/home/tablet/image-speaker-zx7.jpg';
  } else {
    return '/assets/home/mobile/image-speaker-zx7.jpg';
  }
});
</script>

<style scoped>
.preview-xz7 {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0 0 10%;
  width: 100%;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
}
.product-details {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
h2 {
  font-size: 28px;
  font-weight: 700;
}
</style>
