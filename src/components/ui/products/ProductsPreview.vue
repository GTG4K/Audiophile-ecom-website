<template>
  <div class="preview-products">
    <div class="product-1">
      <img src="../../../assets/home/desktop/image-speaker-zx9.png" alt="" />
      <div>
        <h2>{{ xz9.name.toUpperCase() }}</h2>
        <p>{{ xz9.description }}</p>
        <base-button theme="dark" :redirect="`/product/${xz9.slug}`">
          SEE PRODUCT
        </base-button>
      </div>
    </div>

    <div class="product-2">
      <div>
        <h2>{{ xz7.name.toUpperCase() }}</h2>
        <base-button theme="dark" :redirect="`/product/${xz7.slug}`">
          SEE PRODUCT
        </base-button>
      </div>
      <img src="../../../assets/home/desktop/image-speaker-zx7.jpg" alt="" />
    </div>

    <div class="product-3">
      <img src="../../../assets/home/desktop/image-earphones-yx1.jpg" alt="" />
      <div>
        <h2>{{ yx1.name.toUpperCase() }}</h2>
        <base-button theme="dark" :redirect="`/product/${yx1.slug}`">
          SEE PRODUCT
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const [yx1, xz7, xz9] = store.getters.getFeaturedProducts;
</script>

<style scoped>
.preview-products {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.product-1 {
  background: var(--color-main-100);
  display: flex;
  justify-content: space-evenly;
  border-radius: 8px;
  height: 500px;
  overflow: hidden;
}
.product-1 img {
  margin: 64px 0;
  width: 380px;
  height: 450px;
}
.product-1 div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 350px;
  margin: 100px 0 0 0;
}
.product-1 h2 {
  font-size: 56px;
  color: var(--color-white-100);
  line-height: 1.1;
  letter-spacing: 4px;
}
.product-1 p {
  font-size: 15px;
  font-weight: 300;
  color: var(--color-white-100);
}
.product-2 {
  position: relative;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
}
.product-2 div {
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 120px;
  gap: 2rem;
}
.product-2 img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.product-3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: fit-content;
}
.product-3 img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.product-3 div {
  background: var(--color-white-300);
  width: 100%;
  border-radius: 8px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
