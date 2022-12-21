<template>
  <div class="options">
    <div
      class="option"
      v-for="value in props.values"
      :key="value.value"
      :class="{ active: selectedOption === value.value }"
      @click="changeValue(value.value)"
    >
      <div class="radio-button">
        <div
          class="radio-button-inner"
          :class="{ active: selectedOption === value.value }"
        ></div>
      </div>
      <h2>{{ value.title }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['values', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

const selectedOption = ref(props.modelValue);

function changeValue(value) {
  selectedOption.value = value;
  emit('update:modelValue', selectedOption.value);
}
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.option {
  height: 50px;
  border-radius: 8px;
  outline: none;
  border: 1px solid var(--color-white-400);
  padding: 1rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.option.active {
  border-color: var(--color-main-100);
}
.option:hover {
  border-color: var(--color-main-200);
}
.radio-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--color-white-400);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.radio-button-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  height: 55%;
  border-radius: 50%;
  background: var(--color-none);
}
.radio-button-inner.active {
  background: var(--color-main-100);
}
h2 {
  font-weight: 700;
  font-size: 14px;
}
</style>
