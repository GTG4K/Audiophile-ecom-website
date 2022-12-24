<template>
  <div class="form-body" :class="inputClass">
    <label for="">{{ props.title }}</label>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :value="inputValue"
      @input="updateInput"
      @blur="sendInput"
    />
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps(['type', 'placeholder', 'title', 'modelValue', 'error']);
const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

const inputClass = computed(() => {
  return { invalid: props.error };
});
function updateInput(e) {
  inputValue.value = e.target.value;
}
function sendInput() {
  emit('update:modelValue', inputValue.value);
}
</script>

<style scoped>
.form-body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
label {
  font-size: 14px;
  font-weight: 700;
}
input {
  height: 50px;
  border-radius: 8px;
  outline: none;
  border: 1px solid var(--color-white-400);
  padding: 1rem;
}
input:hover {
  border-color: var(--color-main-200);
}
input:active,
input:focus {
  border-color: var(--color-main-100);
}

.invalid input {
  border-color: var(--error-color);
}
.invalid label {
  color: var(--error-color);
  font-weight: 600;
}
span {
  color: var(--error-color);
  font-size: 12px;
  font-weight: 600;
}
</style>
