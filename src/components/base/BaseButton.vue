<template>
  <button type="button" @click="redirectTo" class="light" v-if="props.theme === 'light'">
    <div class="button-text">
      <slot></slot>
    </div>
    <img src="../../assets/shared/desktop/icon-arrow-right.svg" alt="" />
  </button>
  <button
    type="button"
    @click="redirectTo"
    :class="buttonTheme"
    v-if="props.theme != 'light'"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps(['theme', 'size', 'redirect']);

const buttonTheme = computed(() => {
  return {
    main: props.theme === 'main',
    dark: props.theme === 'dark',
    full: props.size === 'full',
  };
});

function redirectTo() {
  if (props.redirect) {
    router.push(props.redirect);
  }
}
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 160px;
  height: 50px;
  border: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  transition: 0.2s ease;
  cursor: pointer;
}
.full {
  width: 100%;
}
.main {
  background: var(--color-main-100);
  color: var(--color-white-100);
}
.main:hover {
  background: var(--color-main-200);
}
.dark {
  background: var(--color-none);
  border: 1px solid var(--color-black-100);
  color: var(--color-black-100);
}
.dark:hover {
  color: var(--color-white-100);
  background: var(--color-black-100);
}
.light {
  background: none;
  color: var(--color-white-500);
}
.light:hover {
  color: var(--color-main-200);
}
</style>
