<template>
  <div class="icon-holder" :class="isActive">
    <img
      @click="toggleCart"
      src="../../../../assets/shared/desktop/icon-cart.svg"
      alt=""
    />
    <cart-body @emitToggle="toggleCart"></cart-body>
  </div>
</template>

<script setup>
import CartBody from './CartBody.vue';
import { ref, computed } from 'vue';

const active = ref(false);
function toggleCart() {
  active.value = !active.value;
}

const isActive = computed(() => {
  return { active: active.value };
});
</script>

<style scoped>
.icon-holder {
  display: flex;
  justify-content: flex-end;
  width: 145px;
  position: relative;
  z-index: 2;
}
img {
  width: 25px;
  object-fit: contain;
  cursor: pointer;
}

@media only screen and (max-width: 450px) {
  .icon-holder {
    width: fit-content;
  }
}
</style>
