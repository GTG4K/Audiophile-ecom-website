<template>
  <div class="cart-body">
    <div class="cart-header">
      <h2>Cart ({{ cartLength }})</h2>
      <p @click="clearCart">Remove all</p>
    </div>
    <div class="cart-products">
      <cart-product
        v-for="cartItem in cartProducts"
        :key="cartItem.product.id"
        :cartItem="cartItem"
      ></cart-product>
    </div>
    <div class="total-price">
      <h2 class="total">Total</h2>
      <h2 class="price">${{ cartPrice }}</h2>
    </div>
    <div class="action" @click="emitToggle">
      <base-button theme="main" size="full" redirect="/checkout">CHECKOUT</base-button>
    </div>
  </div>
</template>

<script setup>
import CartProduct from './CartProduct.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const emit = defineEmits(['emitToggle']);

function emitToggle() {
  emit('emitToggle');
}
const cartProducts = computed(() => {
  return store.getters.getCart;
});

const cartLength = computed(() => {
  return store.getters.getCart.length;
});

const cartPrice = computed(() => {
  const cart = store.getters.getCart;
  let total = 0;
  cart.forEach((cartItem) => {
    total += cartItem.product.price * cartItem.amount;
  });
  return total;
});

function clearCart() {
  store.commit('clearCart');
}
</script>

<style scoped>
.cart-body {
  position: absolute;
  top: 80px;
  right: 0;
  width: 375px;
  max-height: 0px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 8px;
  background: white;
  padding: 0 2rem;
  overflow: hidden;
  transition: 0.5s;
  box-shadow: 0 0 10px var(--color-black-200-shadow);
}
.active .cart-body {
  max-height: 500px;
}
.cart-header {
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
}
.cart-header h2 {
  font-size: 18px;
  font-weight: 600;
}
.cart-header p {
  font-size: 15px;
  font-weight: 400;
  color: var(--color-white-500);
  cursor: pointer;
}
.cart-header p:hover {
  color: var(--color-main-100);
}
.cart-products {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  padding: 0 10px 0 0;
}
.total-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total {
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-white-500);
}
.price {
  font-size: 18px;
  font-weight: 700;
}
.action {
  padding: 0 0 1rem 0;
}
</style>
