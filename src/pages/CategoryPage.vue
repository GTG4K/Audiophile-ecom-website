<template>
  <main>
    <router-view></router-view>
    <filters-component></filters-component>
    <the-description></the-description>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: var(--content-padding);
}
</style>
