<template>
  <div class="suggestion">
    <img :src="props.suggestion.image.desktop" alt="" />
    <h2>{{ props.suggestion.name }}</h2>
    <base-button theme="main" :redirect="`/product/${props.suggestion.slug}`">
      SEE PRODUCT
    </base-button>
  </div>
</template>

<script setup>
const props = defineProps(['suggestion']);
</script>

<style scoped>
.suggestion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
img {
  display: block;
  border-radius: 8px;
}
</style>
