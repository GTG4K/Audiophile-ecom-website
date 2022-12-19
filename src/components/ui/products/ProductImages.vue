<template>
  <div class="image-grid">
    <div class="grid-1">
      <img :src="props.images.first.desktop" alt="" />
      <img :src="props.images.second.desktop" alt="" />
    </div>
    <img :src="props.images.third.desktop" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(['images']);
</script>

<style scoped>
.image-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.grid-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
img {
  border-radius: 8px;
}
</style>
