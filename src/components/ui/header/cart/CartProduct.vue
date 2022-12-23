<template>
  <div class="cart-product-container">
    <div class="cart-product">
      <img :src="props.cartItem.product.image.desktop" alt="product-xx59-headphones" />
      <div class="cart-product-details">
        <h2>{{ props.cartItem.product.name }}</h2>
        <h3>${{ props.cartItem.product.price }}</h3>
      </div>
    </div>
    <base-number v-if="!props.type" v-model="productAmount" mode="cart"></base-number>
    <h4 v-if="props.type === 'summary'">x{{ props.cartItem.amount }}</h4>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['cartItem', 'type']);
const productAmount = ref(props.cartItem.amount);

watch(productAmount, () => {
  if (productAmount.value === 0) {
    store.commit('removeFromCart', { product: props.cartItem.product });
  } else {
    store.commit('editCart', {
      product: props.cartItem.product,
      amount: productAmount.value,
    });
  }
});
</script>

<style scoped>
img {
  height: 70px;
  width: 70px;
  border-radius: 8px;
}
.cart-product-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-product {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.cart-product-details {
  display: flex;
  flex-direction: column;
}
h2 {
  font-size: 12px;
  width: 100px;
  font-weight: 700;
  text-transform: uppercase;
}
h3 {
  font-size: 14px;
  color: var(--color-white-500);
}
h4 {
  font-size: 17px;
  color: var(--color-white-500);
}
</style>
