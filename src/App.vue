<script setup>
import Header from "@/components/Blocks/Header.vue";

import { useRoute } from 'vue-router'
const route = useRoute
// import HelloWorld from './components/HelloWorld.vue'
// import PWABadge from './components/PWABadge.vue'
</script>

<template>
  <Header />
  <RouterView :key="route.fullPath"/>
</template>

<style scoped>
</style>
