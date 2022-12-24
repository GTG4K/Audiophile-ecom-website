<template>
  <div class="dialog-container" v-if="isActive">
    <div class="dialog">
      <img src="../../../../assets/checkout/icon-order-confirmation.svg" alt="" />
      <div class="title">
        <h2>Thank you for your order</h2>
        <p>You will receive an email confirmation shortly.</p>
      </div>
      <div class="products-total">
        <div class="cart-products">
          <cart-product
            v-for="cartItem in cartProducts"
            :key="cartItem.product.id"
            :cartItem="cartItem"
            type="summary"
          ></cart-product>
          <div class="options" v-if="allCartProducts.length > 1">
            <div class="separator"></div>
            <h2 @click="allProducts = !allProducts">
              {{ expand }}
            </h2>
          </div>
        </div>
        <div class="total">
          <h2>GRAND TOTAL</h2>
          <h3>$ {{ grandTotal }}</h3>
        </div>
      </div>
      <div class="action">
        <base-button theme="main" size="full" redirect="/home">BACK TO HOME</base-button>
      </div>
    </div>
    <div class="dialog-backdrop"></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import CartProduct from '../../header/cart/CartProduct.vue';
const props = defineProps(['active']);
const emit = defineEmits(['toggleDialog']);
const router = useRouter();
const store = useStore();

const allProducts = ref(false);

const allCartProducts = computed(() => {
  return store.getters.getCart;
});

const cartProducts = computed(() => {
  const cart = store.getters.getCart;
  const firstCart = [cart[0]];

  if (allProducts.value) {
    return cart;
  } else {
    return firstCart;
  }
});

const expand = computed(() => {
  return allProducts.value
    ? 'view less'
    : `and ${allCartProducts.value.length - 1} other item(s)`;
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
  return Math.floor(rawTotal.value + vat.value + 50);
});

const isActive = computed(() => {
  return props.active;
});
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  border-radius: 8px;
  background: var(--color-white-100);
  box-shadow: 0 0 10px var(--color-black-200-shadow);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 4;
}
.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-black-200-backdrop);
  width: 100%;
  height: 100%;
  z-index: 3;
}
.products-total {
  display: grid;
  grid-template-columns: 60% 40%;
  border-radius: 8px;
  overflow: hidden;
}
.cart-products {
  padding: 0.5rem 1.5rem;
  background: var(--color-white-200);
}
.total {
  padding: 2rem 1.5rem;
  background: var(--color-black-100);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 0.4rem;
}
.total h2 {
  color: var(--color-white-500);
  font-size: 15px;
  font-weight: 400;
}
.total h3 {
  color: var(--color-white-100);
  font-size: 18px;
  font-weight: 700;
}
.title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.title h2 {
  font-size: 36px;
  font-weight: 700px;
  width: 245px;
  line-height: 1.1;
}
.title p {
  font-size: 15px;
  color: var(--color-white-500);
}
.options {
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
}
.separator {
  background: var(--color-white-500);
  height: 1px;
  width: 90%;
}
.options h2 {
  color: var(--color-white-500);
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}
.options h2:hover {
  color: var(--color-main-200);
}
img {
  height: 70px;
  width: 70px;
}

@media only screen and (max-width: 650px) {
  .dialog {
    width: 90%;
    padding: 2rem;
  }
  .cart-products {
    padding: 1rem;
  }
  .products-total {
    grid-template-columns: 1fr;
  }
}
</style>
