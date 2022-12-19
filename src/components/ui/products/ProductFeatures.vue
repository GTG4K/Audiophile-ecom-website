<template>
  <div class="features-container">
    <div class="features">
      <h2>FEATURES</h2>
      <p>{{ props.product.features }}</p>
    </div>
    <div class="in-the-box">
      <h2>IN THE BOX</h2>
      <div class="includes-container">
        <div class="includes" v-for="part in props.product.includes" :key="part.item">
          <h3>{{ part.quantity }}x</h3>
          <p>{{ part.item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product']);
</script>

<style scoped>
.features-container {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 10rem;
}
.features {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.in-the-box {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.includes-container {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.includes {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
h2 {
  font-size: 32px;
  font-weight: 700;
}
h3 {
  color: var(--color-main-100);
}
p {
  color: var(--color-white-500);
}
</style>
