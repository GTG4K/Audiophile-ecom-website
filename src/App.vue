<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from './components/ui/header/TheHeader.vue';
import TheFooter from './components/ui/footer/TheFooter.vue';
import { ref, reactive, computed, watch } from 'vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

:root {
  --font-main: 'Manrope', sans-serif;

  --color-main-100: hsl(22, 65%, 57%);
  --color-main-200: hsl(21, 95%, 75%);

  --color-black-100: hsl(0, 0%, 0%);
  --color-black-200: hsl(0, 3%, 10%);
  --color-black-200-shadow: hsl(0, 3%, 10%, 0.4);

  --color-white-100: hsl(0, 0%, 100%);
  --color-white-200: hsl(0, 0%, 95%);
  --color-white-300: hsl(0, 0%, 90%);
  --color-white-400: hsl(0, 0%, 75%);
  --color-white-500: hsl(0, 0%, 60%);

  --color-none: hsl(0, 0%, 0%, 0);

  --header-height: 90px;
  --content-padding: 0 20rem;
}
body {
  overflow-x: hidden;
}
* {
  font-family: var(--font-main);
}
@media only screen and (max-width: 1550px) {
  :root {
    --content-padding: 0 6rem;
  }
}
@media only screen and (max-width: 1200px) {
  :root {
    --content-padding: 0 3rem;
  }
}
</style>
