<template>
  <div class="preview-products">
    <preview-xz9 :product="xz9" :size="size"></preview-xz9>
    <preview-xz7 :product="xz7" :size="size"></preview-xz7>
    <preview-yx1 :product="yx1" :size="size"></preview-yx1>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import PreviewXz7 from './PreviewXz7.vue';
import PreviewXz9 from './PreviewXz9.vue';
import PreviewYx1 from './PreviewYx1.vue';

const width = ref(window.innerWidth);
const store = useStore();

const products = store.getters.getFeaturedProducts;
const yx1 = products[0];
const xz7 = products[1];
const xz9 = products[2];

const updateWidth = function () {
  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
  });
};

const size = computed(() => {
  if (width.value > 1000) {
    return 'desktop';
  } else if (width.value > 450) {
    return 'tablet';
  } else {
    return 'mobile';
  }
});

onMounted(() => {
  updateWidth();
});
</script>

<style scoped>
.preview-products {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
