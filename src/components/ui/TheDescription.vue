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
    <img src="../../assets/shared/desktop/image-best-gear.jpg" alt="" />
  </div>
</template>

<script setup></script>

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
</style>
