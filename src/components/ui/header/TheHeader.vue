<template>
  <header :class="headerStyling">
    <header-nav :size="headerSize" :route="currentRoute"></header-nav>
    <header-product :size="headerSize" :route="currentRoute"></header-product>
  </header>
</template>

<script setup>
import FiltersComponent from '../Filters/FiltersComponent.vue';
import HeaderProduct from './HeaderProduct.vue';
import HeaderNav from './HeaderNav.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, watch, computed } from 'vue';

const width = ref(window.innerWidth);

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

const updateWidth = function () {
  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
  });
};

//set initial route path on page load
onMounted(() => {
  updatePath();
  updateWidth();
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

const headerSize = computed(() => {
  if (width.value > 1000) {
    return 'desktop';
  } else if (width.value > 450) {
    return 'tablet';
  } else {
    return 'mobile';
  }
});
</script>

<style scoped>
header {
  position: relative;
  padding: var(--content-padding);
  background: var(--color-black-100);
}
.home {
  background: var(--color-black-200);
}
@media only screen and (max-width: 1000px) {
}
@media only screen and (max-width: 450px) {
  header {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
