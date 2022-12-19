<template>
  <footer>
    <div class="footer-nav">
      <img class="logo" @click="goHome" src="../../../assets/shared/desktop/logo.svg" />
      <nav>
        <router-link to="/home">HOME</router-link>
        <router-link to="/category/headphones">HEADPHONES</router-link>
        <router-link to="/category/speakers">SPEAKERS</router-link>
        <router-link to="/category/earphones">EARPHONES</router-link>
      </nav>
    </div>
    <div class="footer-extras">
      <p>
        Located at the heart of New York City, Audiophile is the premier store for high
        end headphones, earphones, speakers, and audio accessories. We have a large
        showroom and luxury demonstration rooms available for you to browse and experience
        a wide range of our products. Stop by our store to meet some of the fantastic
        people who make Audiophile the best place to buy your portable audio equipment.
      </p>
      <div class="socials">
        <img src="../../../assets/shared/desktop/icon-facebook.svg" alt="" />
        <img src="../../../assets/shared/desktop/icon-instagram.svg" alt="" />
        <img src="../../../assets/shared/desktop/icon-twitter.svg" alt="" />
      </div>
    </div>
    <h2 class="copyright">Copyright 2021. All Rights Reserved</h2>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/home');
}
</script>

<style scoped>
footer {
  background: var(--color-black-200);
  padding: var(--content-padding);
  margin-top: 5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.footer-nav {
  display: flex;
  justify-content: space-between;
}
nav {
  display: flex;
  gap: 2rem;
}
a {
  color: var(--color-white-100);
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 3px;
  transition: 0.2s ease;
}
a:hover {
  color: var(--color-main-100);
}
.footer-extras {
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  align-items: flex-end;
}
.footer-extras p {
  width: 580px;
  font-size: 15px;
  font-weight: 300;
  color: var(--color-white-500);
}
.socials {
  display: flex;
  gap: 15px;
  height: 100%;
  padding: 1rem 0;
}
.socials > img {
  height: 25px;
  cursor: pointer;
}
h2 {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-white-400);
}
</style>
