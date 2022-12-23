<template>
  <div class="description">
    <div class="description-text">
      <h2>Bringing you the <b>best</b> audio gear</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store for high
        end headphones, earphones, speakers, and audio accessories. We have a large
        showroom and luxury demonstration rooms available for you to browse and experience
        a wide range of our products. Stop by our store to meet some of the fantastic
        people who make Audiophile the best place to buy your portable audio equipment.
      </p>
    </div>
    <img :src="descriptionImage" alt="" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';

const width = ref(window.innerWidth);

const updateWidth = function () {
  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
  });
};

onMounted(() => {
  updateWidth();
});

const descriptionImage = computed(() => {
  if (width.value > 850) {
    return '/assets/shared/desktop/image-best-gear.jpg';
  } else if (width.value > 450) {
    return '/assets/shared/tablet/image-best-gear.jpg';
  } else {
    return '/assets/shared/mobile/image-best-gear.jpg';
  }
});
</script>

<style scoped>
.description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.description-text {
  height: 100%;
  width: 420px;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img {
  width: 100%;
  object-fit: cover;
  height: 500px;
}
h2 {
  font-size: 40px;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 2px;
}
b {
  color: var(--color-main-100);
}
p {
  color: var(--color-white-500);
}
img {
  display: block;
  border-radius: 8px;
}

@media only screen and (max-width: 850px) {
  .description {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
  .description-text {
    width: 80%;
    text-align: center;
  }
}
@media only screen and (max-width: 535px) {
  h2 {
    font-size: 35px;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 2px;
  }
}
@media only screen and (max-width: 450px) {
  h2 {
    font-size: 27px;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 2px;
  }
  .description-text {
    width: 100%;
    text-align: center;
  }
}
</style>
