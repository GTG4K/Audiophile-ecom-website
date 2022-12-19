<template>
  <header :class="headerStyling">
    <div class="main">
      <img
        class="logo"
        @click="goHome"
        src="../../../assets/shared/desktop/logo.svg"
        alt=""
      />
      <nav>
        <router-link to="/home">HOME</router-link>
        <router-link to="/category/headphones">HEADPHONES</router-link>
        <router-link to="/category/speakers">SPEAKERS</router-link>
        <router-link to="/category/earphones">EARPHONES</router-link>
      </nav>
      <cart-component></cart-component>
    </div>
    <div v-if="currentRoute === 'home'" class="selected-page">
      <header-product></header-product>
      <img
        class="product-image"
        src="../../../assets/home/desktop/image-hero.jpg"
        alt=""
      />
    </div>
    <div v-if="currentRoute != 'home' && currentRoute" class="selected-page">
      <h2>{{ currentRoute }}</h2>
    </div>
  </header>
</template>

<script setup>
import CartComponent from './CartComponent.vue';
import HeaderProduct from './HeaderProduct.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, watch, computed } from 'vue';

const currentRoute = ref('');
const route = useRoute();
const router = useRouter();

//Update route path
const updatePath = function () {
  const [, , path] = route.path.split('/');
  if (route.path === '/home') {
    currentRoute.value = 'home';
  } else {
    if (path) {
      currentRoute.value = path.toUpperCase();
    } else {
      currentRoute.value = null;
    }
  }
};

//set initial route path on page load
onMounted(() => {
  updatePath();
});

//Watch for changes in route path
watch(
  () => route.path,
  () => {
    updatePath();
  }
);

function goHome() {
  router.push('/home');
}
const headerStyling = computed(() => {
  return { home: currentRoute.value === 'home' };
});
</script>

<style scoped>
header {
  position: relative;
  background: var(--color-black-100);
  padding: var(--content-padding);
  z-index: 0;
}
.home {
  background: var(--color-black-200);
  height: 690px;
}
.logo {
  cursor: pointer;
}
.main {
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  border-bottom: 1px solid hsla(0, 0%, 50%, 0.3);
}
.product-image {
  position: absolute;
  width: 1400px;
  top: -30px;
  right: 150px;
  height: max-content;
  z-index: -1;
}
nav {
  display: flex;
  gap: 1rem;
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
.selected-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}
.home .selected-page {
  display: block;
}
h2 {
  color: var(--color-white-100);
  font-size: 35px;
  font-weight: 700;
}
.logo {
  width: 150px;
  object-fit: contain;
}
</style>
