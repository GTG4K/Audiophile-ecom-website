<template>
  <div v-if="props.route === 'home'" class="product">
    <div class="product-details">
      <p>NEW PRODUCT</p>
      <h2>{{ productTitle }}</h2>
      <h3>{{ productDescription }}</h3>
      <base-button theme="main" :redirect="`/product/${product.slug}`">
        SEE PRODUCT
      </base-button>
    </div>
    <img :src="homePagePreviewImg" alt="" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
// import { ref, reactive, computed } from 'vue';
const store = useStore();
const props = defineProps(['size', 'route']);
const product = store.getters.getHomeProduct;

const productTitle = computed(() => {
  return product.name.toUpperCase();
});

const productDescription = computed(() => {
  return product.description;
});

const homePagePreviewImg = computed(() => {
  if (props.size === 'desktop') {
    return '/assets/home/desktop/image-hero.jpg';
  } else if (props.size === 'tablet') {
    return '/assets/home/tablet/image-header.jpg';
  } else {
    return '/assets/home/mobile/image-header.jpg';
  }
});
</script>

<style scoped>
.product {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 500px;
  padding: 0 0 1.5rem 0;
}
.product-details {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 1.5rem;
  z-index: 1;
}
img {
  position: absolute;
  height: 100%;
  width: fit-content;
  top: -50px;
  right: 0;
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
@media only screen and (max-width: 1000px) {
  img {
    height: 500px;
    width: 500px;
    object-fit: contain;
    top: -50px;
    left: 50%;
    transform: translate(-50%);
  }
  .product {
    justify-content: center;
  }
  .product-details {
    align-items: center;
    text-align: center;
  }
}

@media only screen and (max-width: 450px) {
  .product-details {
    gap: 1.2rem;
    padding: var(--content-padding);
  }
  p {
    letter-spacing: 10px;
    font-weight: 400;
    font-size: 16px;
  }
  h2 {
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
  }
  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 2px;
  }
  img {
    top: -70px;
    width: 100vw;
    height: calc(100% + 70px);
    object-fit: cover;
  }
}
</style>
