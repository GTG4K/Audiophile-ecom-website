<template>
  <div class="image-grid">
    <div class="grid-1">
      <img :src="image1" alt="" />
      <img :src="image2" alt="" />
    </div>
    <img :src="image3" alt="" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['images', 'size']);

const image1 = computed(() => {
  if (props.size === 'desktop') {
    return props.images.first.desktop;
  } else if (props.size === 'tablet') {
    return props.images.first.tablet;
  } else {
    return props.images.first.mobile;
  }
});

const image2 = computed(() => {
  if (props.size === 'desktop') {
    return props.images.second.desktop;
  } else if (props.size === 'tablet') {
    return props.images.second.tablet;
  } else {
    return props.images.second.mobile;
  }
});

const image3 = computed(() => {
  if (props.size === 'desktop') {
    return props.images.third.desktop;
  } else if (props.size === 'tablet') {
    return props.images.third.tablet;
  } else {
    return props.images.third.mobile;
  }
});
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 2rem;
  width: 80%;
  margin: auto;
}
.grid-1 {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
}
.grid-1 > img {
  height: 100%;
  object-fit: cover;
}
.image-grid > img {
  width: 100%;
  object-fit: cover;
}
img {
  border-radius: 8px;
}
@media only screen and (max-width: 700px) {
  .image-grid {
    gap: 1rem;
  }
  .grid-1 {
    gap: 1rem;
  }
}
@media only screen and (max-width: 600px) {
  .image-grid {
    grid-template-columns: 1fr;
    width: 100%;
  }
  .grid-1 {
    grid-template-columns: 1fr;
  }
}
</style>
