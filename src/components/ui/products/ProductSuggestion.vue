<template>
  <div class="suggestion">
    <img :src="suggestionImage" alt="" />
    <h2>{{ props.suggestion.name }}</h2>
    <base-button theme="main" :redirect="`/product/${props.suggestion.slug}`">
      SEE PRODUCT
    </base-button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['suggestion', 'size']);

const suggestionImage = computed(() => {
  if (props.size === 'desktop') {
    return props.suggestion.image.desktop;
  } else if (props.size === 'tablet') {
    return props.suggestion.image.tablet;
  } else {
    return props.suggestion.image.mobile;
  }
});
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
  border-radius: 8px;
}
</style>
