<template>
  <div class="category">
    <img :src="props.category.image" alt="" />
    <h1>{{ props.category.name }}</h1>
    <base-button theme="light" :redirect="`/category/${props.category.name}`"
      >SHOP</base-button
    >
  </div>
</template>

<script setup>
const props = defineProps(['category']);
</script>

<style scoped>
.category {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 1rem 0;
  background: var(--color-white-300);
  border-radius: 8px;
}
img {
  position: absolute;
  width: 250px;
  left: 50%;
  bottom: 4.5rem;
  transform: translate(-50%, 0);
}
</style>
