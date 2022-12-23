<template>
  <div class="product-card">
    <img :src="productImage" :alt="product.name" />
    <div class="product">
      <div class="title">
        <h2 class="tag-line" v-if="product.new === true">NEW PRODUCT</h2>
        <h2>{{ product.name }}</h2>
      </div>
      <p>{{ product.description }}</p>
      <h2 class="price">$ {{ product.price * productAmount }}</h2>
      <div class="action-buttons">
        <base-number v-model="productAmount"></base-number>
        <div @click="addToCart" v-if="alreadyInCart">
          <base-button theme="main">ADD TO CART</base-button>
        </div>
        <base-button v-if="!alreadyInCart" theme="dark">ALREADY IN CART</base-button>
      </div>
    </div>
  </div>
  <product-features :product="product"></product-features>
  <product-images :images="product.gallery" :size="size"></product-images>
  <div class="suggestions-container">
    <h2>YOU MAY ALSO LIKE</h2>
    <div class="suggestions">
      <product-suggestion
        v-for="suggestion in product.others"
        :key="suggestion.slug"
        :suggestion="suggestion"
        :size="size"
      ></product-suggestion>
    </div>
  </div>
</template>

<script setup>
import ProductFeatures from './ProductFeatures.vue';
import ProductImages from './ProductImages.vue';
import ProductSuggestion from './ProductSuggestion.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, computed, onMounted, watch } from 'vue';

const route = useRoute();
const store = useStore();

const width = ref(window.innerWidth);
let path = route.path.split('/');
const realPath = ref(path[2]);

const productAmount = ref(1);

const updateWidth = function () {
  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
  });
};

onMounted(() => {
  updateWidth();
});

watch(
  () => route.path,
  () => {
    path = route.path.split('/');
    realPath.value = path[2];
  }
);

const productImage = computed(() => {
  if (size.value === 'desktop') {
    return product.value.image.desktop;
  } else if (size.value === 'tablet') {
    return product.value.image.tablet;
  } else {
    return product.value.image.mobile;
  }
});

const size = computed(() => {
  if (width.value > 1000) {
    return 'desktop';
  } else if (width.value > 600) {
    return 'tablet';
  } else {
    return 'mobile';
  }
});

const product = computed(() => {
  const products = store.getters.getProducts;

  const product = products.find((product) => product.slug === realPath.value);
  return product;
});

const alreadyInCart = computed(() => {
  const cart = store.getters.getCart;

  const cartItem = cart.find((cartItem) => cartItem.product.slug === realPath.value);
  console.log(cart);
  return cartItem ? false : true;
});

function addToCart() {
  const productToAdd = { product: product.value, amount: productAmount.value };
  store.commit('addToCart', { product: productToAdd });
}
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
  margin-top: 4rem;
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
}
h2 {
  font-size: 40px;
}
p {
  color: var(--color-white-500);
  line-height: 1.8;
}
.price {
  font-size: 25px;
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
.suggestions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.suggestions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.action-buttons {
  display: flex;
  gap: 1rem;
}
@media only screen and (max-width: 1000px) {
  .suggestions {
    gap: 1rem;
  }
}
@media only screen and (max-width: 700px) {
  h2 {
    font-size: 30px;
  }
}
@media only screen and (max-width: 600px) {
  .product-card {
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
  }
  .product-card > * {
    width: 100%;
  }
  .suggestions {
    grid-template-columns: 1fr;
  }
}
</style>
