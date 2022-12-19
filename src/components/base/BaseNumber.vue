<template>
  <div class="number-input" :class="numberInputStyle">
    <p @click="decrement">-</p>
    <h2>{{ value }}</h2>
    <p @click="increment">+</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['modelValue', 'mode']);
const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);

const numberInputStyle = computed(() => {
  return { cart: props.mode === 'cart' };
});

function increment() {
  value.value++;
  emit('update:modelValue', value.value);
}

function decrement() {
  if (value.value - 1 === 0) {
    if (props.mode === 'cart') {
      value.value--;
      emit('update:modelValue', value.value);
    }
  } else {
    value.value--;
    emit('update:modelValue', value.value);
  }
}
</script>

<style scoped>
.number-input {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--color-white-300);
  width: 120px;
  height: 50px;
}
.number-input > * {
  width: 100%;
  height: 100%;
}
.cart {
  width: 80px;
  height: 35px;
  border-radius: 8px;
}
p {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  transition: 0.2s ease;
}
p:hover {
  color: var(--color-main-100);
}
h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
}
</style>
