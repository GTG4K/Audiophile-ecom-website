<template>
  <div class="category">
    <img :src="props.category.image" alt="" />
    <h1>{{ props.category.name }}</h1>
    <base-button theme="light" :redirect="`/category/${props.category.name}`">
      SHOP
    </base-button>
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
h1 {
  font-size: 20px;
}
img {
  position: absolute;
  width: 200px;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%, 0);
}

@media only screen and (max-width: 1000px) {
  h1 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 620px) {
  img {
    position: absolute;
    width: 160px;
    left: 50%;
    bottom: 2rem;
    transform: translate(-50%, 0);
  }
  .category {
    padding: 5rem 0 1rem 0;
  }
  .category:not(:first-child) {
    margin-top: 2rem;
  }
}
</style>
