<template>
  <!-- Desktop -->
  <div class="header" :class="headerClasses" v-if="props.size == 'desktop'">
    <img src="../../../assets/shared/desktop/logo.svg" alt="" @click="goHome" />
    <nav>
      <router-link to="/home">HOME</router-link>
      <router-link to="/category/headphones">HEADPHONES</router-link>
      <router-link to="/category/speakers">SPEAKERS</router-link>
      <router-link to="/category/earphones">EARPHONES</router-link>
    </nav>
    <cart-component></cart-component>
    <div class="separator"></div>
  </div>

  <!-- Tablet -->
  <div class="header" :class="headerClasses" v-if="props.size == 'tablet'">
    <div class="logo">
      <img
        @click="toggleHeader"
        src="../../../assets/shared/tablet/icon-hamburger.svg"
        alt=""
      />
      <img src="../../../assets/shared/desktop/logo.svg" @click="goHome" alt="" />
    </div>
    <cart-component></cart-component>
    <div class="separator"></div>
    <nav>
      <router-link @click="closeHeader" to="/home">HOME</router-link>
      <router-link @click="closeHeader" to="/category/headphones">HEADPHONES</router-link>
      <router-link @click="closeHeader" to="/category/speakers">SPEAKERS</router-link>
      <router-link @click="closeHeader" to="/category/earphones">EARPHONES</router-link>
    </nav>
  </div>

  <!-- mobile -->
  <div class="header" :class="headerClasses" v-if="props.size == 'mobile'">
    <img
      @click="toggleHeader"
      src="../../../assets/shared/tablet/icon-hamburger.svg"
      alt=""
    />
    <img src="../../../assets/shared/desktop/logo.svg" @click="goHome" alt="" />
    <cart-component></cart-component>
    <div class="separator"></div>
    <nav>
      <router-link @click="closeHeader" to="/home">HOME</router-link>
      <router-link @click="closeHeader" to="/category/headphones">HEADPHONES</router-link>
      <router-link @click="closeHeader" to="/category/speakers">SPEAKERS</router-link>
      <router-link @click="closeHeader" to="/category/earphones">EARPHONES</router-link>
    </nav>
  </div>

  <div class="overlay" v-if="navActive" @click="closeHeader"></div>
</template>

<script setup>
import CartComponent from './cart/CartComponent.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['size', 'route']);
const router = useRouter();
const navActive = ref(false);

const headerClasses = computed(() => {
  return {
    headActive: navActive.value,
    desktop: props.size === 'desktop',
    tablet: props.size === 'tablet',
    mobile: props.size === 'mobile',
    product: props.route === 'home',
  };
});

function goHome() {
  router.push('/home');
}

function toggleHeader() {
  navActive.value = !navActive.value;
}

function closeHeader() {
  navActive.value = false;
}

const homePagePreviewImg = computed(() => {
  if (props.size === 'desktop') {
    return '/assets/home/desktop/image-hero.jpg';
  } else if (props.size === 'tablet') {
    return '/assets/home/tablet/image-header.jpg';
  } else {
    return '/assets/home/mobile/image-header.jpg';
  }
});
</script>

<style scoped>
/* utility */
.separator {
  height: 1px;
  width: calc(100% - 28rem);
  position: absolute;
  background: var(--color-white-500);
  top: calc(var(--header-height) - 1px);
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 3;
}
.overlay {
  position: fixed;
  background: var(--color-black-200-backdrop);
  z-index: 2;
  left: 0;
  width: 100%;
  height: 100%;
}
/* Desktop */
.header {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  height: 25px;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.header nav {
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 2;
}

/* Tablet & mobile*/
.logo {
  display: flex;
  gap: 1rem;
}
.tablet nav,
.mobile nav {
  position: absolute;
  width: 100vw;
  max-height: 0px;
  background: var(--color-black-100);
  left: 0;
  top: var(--header-height);
  z-index: 3;

  display: flex;
  flex-direction: column;
  padding: var(--content-padding);
  transition: 0.3s ease;
  overflow: hidden;
}
.tablet.product nav,
.mobile.product nav {
  background: var(--color-black-200);
}
.tablet.headActive nav,
.mobile.headActive nav {
  max-height: 200px;
}
/* Mobile */

/* Links */
a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-white-200);
}
.tablet a:last-child,
.mobile a:last-child {
  padding: 0 0 2rem 0;
}

.tablet a:first-child,
.mobile a:first-child {
  padding: 2rem 0 0 0;
}
a:hover {
  color: var(--color-main-200);
}
.router-link-active {
  color: var(--color-main-100);
}

/* Mobile */
.mobile.header {
  justify-content: space-between;
}
@media only screen and (max-width: 1550px) {
  .separator {
    width: calc(100% - 12rem);
  }
}
@media only screen and (max-width: 1200px) {
  .separator {
    width: calc(100% - 6rem);
  }
}
@media only screen and (max-width: 1000px) {
}
@media only screen and (max-width: 450px) {
  .separator {
    width: 100%;
  }
  .header {
    padding: 1.2rem;
  }
}
</style>
