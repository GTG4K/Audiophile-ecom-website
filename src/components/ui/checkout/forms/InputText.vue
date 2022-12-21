<template>
  <div class="form-body">
    <label for="">{{ props.title }}</label>
    <input :type="props.type" :placeholder="props.placeholder" />
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script setup>
const props = defineProps(['type', 'placeholder', 'title']);
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
</style>
