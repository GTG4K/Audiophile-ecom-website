<template>
  <div class="summary-card">
    <h2>SUMMARY</h2>
    <div class="cart-products">
      <cart-product
        v-for="cartItem in cartProducts"
        :key="cartItem.product.id"
        :cartItem="cartItem"
        type="summary"
      ></cart-product>
    </div>
    <div class="prices">
      <div class="price-component">
        <h2 class="total">Total</h2>
        <h2 class="price">${{ rawTotal }}</h2>
      </div>
      <div class="price-component">
        <h2 class="total">SHIPPING</h2>
        <h2 class="price">$50</h2>
      </div>
      <div class="price-component">
        <h2 class="total">VAT (INCLUDED)</h2>
        <h2 class="price">${{ vat }}</h2>
      </div>
      <div class="price-component grand-total">
        <h2 class="total">GRAND TOTAL</h2>
        <h2 class="price">${{ grandTotal }}</h2>
      </div>
    </div>
    <div class="action">
      <base-button theme="main" size="full">CONTINUE & PAY</base-button>
    </div>
  </div>
</template>

<script setup>
import CartProduct from '../header/cart/CartProduct.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const cartProducts = computed(() => {
  return store.getters.getCart;
});

const rawTotal = computed(() => {
  const cart = store.getters.getCart;
  let total = 0;
  cart.forEach((cartItem) => {
    total += cartItem.product.price * cartItem.amount;
  });
  return Math.floor(total);
});

const vat = computed(() => {
  return Math.floor((rawTotal.value / 100) * 20);
});

const grandTotal = computed(() => {
  return Math.floor(rawTotal.value + (rawTotal.value / 100) * 20 + 50);
});
</script>

<style scoped>
.summary-card {
  background-color: var(--card-color);
  box-shadow: 0 0 5px var(--color-black-200-shadow);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  height: fit-content;
}
.cart-products {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.prices {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.price-component {
  display: flex;
  justify-content: space-between;
}
h2 {
  font-size: 18px;
}
.price-component .total {
  color: var(--color-white-500);
  font-weight: 400;
  font-size: 16px;
}
.grand-total {
  margin: 1rem 0 0 0;
}
.grand-total .price {
  color: var(--color-main-100);
}
</style>
